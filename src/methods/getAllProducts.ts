import axios from "axios"
import { ProductApiResponse } from "../interfaces/IProduct"
import { Options } from "../interfaces/IOptions"

export const getAllProductsMethod = async (shopId: number, apiKey: string, apiSecret: string, options: Options): Promise<ProductApiResponse> => {

  if (options.page == null || options.size == null) {
    throw Error("Please provide page and size properly")
  }

  const token: string = Buffer.from(`${apiKey}:${apiSecret}`, 'utf8').toString('base64')

  let config: any = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.trendyol.com/sapigw/suppliers/' + shopId
      + '/products?page=' + options.page + '&size=' + options.size + '&approved=True' + (options.dateType ? `&dateQueryType=${options.dateType}` : "")
      + (options.startDate ? `&startDate=${options.startDate}` : '') + (options.onSale ? `&onSale=${options.onSale}` : ''),
    headers: {
      'Authorization': 'Basic ' + token,
    },
    maxRedirects: 0
  };

  let response = await axios(config)
  let result: ProductApiResponse
  result = response.data
  return result
}

