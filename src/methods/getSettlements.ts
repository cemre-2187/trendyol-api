import axios from "axios"
import { Options } from "../interfaces/IOptions";
import { SettlementApiResponse } from "../interfaces/ISettlements"

export const getSettlements = async (shopId: number, apiKey: string, apiSecret: string, options: Options): Promise<SettlementApiResponse> => {

    if (!options.transactionType) {
        throw Error("Please provide any transaction type")
    }


    const token: string = Buffer.from(`${apiKey}:${apiSecret}`, 'utf8').toString('base64')

    let config: any = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.trendyol.com/integration/finance/che/sellers/' + shopId + '/settlements?transactionType=' + options.transactionType + options.startDate ? ('&startDate=' + options.startDate) : '' + options.endDate ? ('&endDate=' + options.endDate) : '',
        headers: {
            'Authorization': 'Basic ' + token,
        },
        maxRedirects: 0
    };

    let response = await axios(config)
    let result: SettlementApiResponse
    result = response.data
    return result
}
