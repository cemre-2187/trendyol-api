import axios from "axios"
import { InvoiceApiResponse } from "../interfaces/IInvoices"
import { Options } from "../interfaces/IOptions"

export const getInvoiceMethod = async (shopId: number, apiKey: string, apiSecret: string, options: Options): Promise<InvoiceApiResponse> => {

    if (!options.invoiceId || typeof options.invoiceId !== 'string') throw Error('Please provide a proper invoiceId')

    const token: string = Buffer.from(`${apiKey}:${apiSecret}`, 'utf8').toString('base64')

    let config: any = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.trendyol.com/integration/finance/che/sellers/${shopId}/cargo-invoice/${options.invoiceId}/items`,
        headers: {
            'Authorization': 'Basic ' + token,
        },
        maxRedirects: 0
    };

    let response = await axios(config)
    let result: InvoiceApiResponse
    result = response.data
    return result
}

