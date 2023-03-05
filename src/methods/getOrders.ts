import axios from "axios"
import { Options } from "../interfaces/IOptions";
import { OrderApiResponse } from "../interfaces/IOrder"

export const getOrdersMethod = async (shopId: number, apiKey: string, apiSecret: string, options: Options): Promise<OrderApiResponse> => {

  if (!options.page || options.size) {
    throw Error("Please provide page and size properly")
  }

  const token: string = Buffer.from(`${apiKey}:${apiSecret}`, 'utf8').toString('base64')

  let config: any = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.trendyol.com/sapigw/suppliers/' + shopId + '/orders?page=' +
      options.page + '&size=' + options.size + '&orderByDirection=DESC&status=' + (options.status ? options.status : ""),
    headers: {
      'Authorization': 'Basic ' + token,
    },
    maxRedirects: 0
  };

  let response = await axios(config)
  let result: OrderApiResponse
  result = response.data
  return result
}

