import axios from "axios"
import { Options } from "../interfaces/IOptions";
import { Settlement, SettlementApiResponse } from "../interfaces/ISettlements"

export const getSettlements = async (shopId: number, apiKey: string, apiSecret: string, options: Options): Promise<Settlement[]> => {

    if (!options.transactionType) {
        throw Error("Please provide any transaction type")
    }
    if (!options.day && !options.startDate) {
        throw Error("Please provide either day or startDate parameters properly")
    }
    if (options.day && options.startDate) {
        throw Error("Please provide only either day or startDate parameters properly")
    }


    const token: string = Buffer.from(`${apiKey}:${apiSecret}`, 'utf8').toString('base64')
    // There is a 15 day limit in this endpoint so we have to do partition for long term data
    // Define Request variables
    let requestPool: any = []

    // Determine request count because of the 15 days limit
    let cycle: number;
    let mod: number;
    if (options.day) {
        cycle = Math.floor(options.day / 15)
        mod = options.day % 15
    } else {
        cycle = Math.floor(options.startDate / 1296000000)
        mod = options.startDate % 1296000000
    }
    if (mod === 0) mod = 1
    // We are defining start value here because we have to track this 
    // value for last request which is using leftover days 
    let start: number = Date.now();

    // Get values for past with 15 days cycle
    for (var i: number = 0; i < cycle; i++) {
        let current: number = Date.now() - (i * 1296000000);
        start = current - 1296000000
        //Cycle days config
        let config: any = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.trendyol.com/integration/finance/che/sellers/' + shopId + '/settlements?endDate=' +
                current + '&startDate=' + start + '&transactionType=' + options.transactionType + '&page=0&size=1000',
            headers: {
                'Authorization': 'Basic ' + token,
            },
            maxRedirects: 0
        };
        requestPool.push(axios(config))
    }

    // Last start day of the cycles will be end date. Because We alread take data from that time.
    // Start mod will be leftover days ago
    let currentMod = start;
    let startMod = options.day ? currentMod - (mod * 86400000) : currentMod - mod

    //Leftover days request config
    let config: any = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.trendyol.com/integration/finance/che/sellers/' + shopId + '/settlements?endDate=' +
            currentMod + '&startDate=' + startMod + '&transactionType=' + options.transactionType + '&page=0&size=1000',
        headers: {
            'Authorization': 'Basic ' + token,
        },
        maxRedirects: 0
    };

    // Collect all requests in array
    requestPool.push(axios(config))

    // Initialize all requests at the same time and wait for all
    let responsePool: any = await axios.all(requestPool)

    let responseArray: any = [];
    //Take content part of the data for meaniungful return

    responsePool.map((res: any) => {
        responseArray = responseArray.concat(res.data.content)
    })


    let result: Settlement[]
    result = responseArray
    return result


}
