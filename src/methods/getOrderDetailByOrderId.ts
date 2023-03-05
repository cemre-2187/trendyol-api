import axios from "axios"
import { Options } from "../interfaces/IOptions";
import { OrderApiResponse } from "../interfaces/IOrder"

export const getOrderDetailByOrderIdMethod = async (shopId: number, apiKey: string, apiSecret: string, options: Options): Promise<OrderApiResponse> => {

  if (!options.orderId) {
    throw Error("Please provide Order Number properly")
  }

  const token: string = Buffer.from(`${apiKey}:${apiSecret}`, 'utf8').toString('base64')

  let config: any = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.trendyol.com/sapigw/suppliers/' + shopId + '/orders?orderNumber=' + options.orderId,
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
