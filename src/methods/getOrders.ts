import axios from "axios";
import { Options } from "../interfaces/IOptions";
import { OrderApiResponse } from "../interfaces/IOrder";

export const getOrdersMethod = async (
  shopId: number,
  apiKey: string,
  apiSecret: string,
  options: Options
): Promise<OrderApiResponse> => {
  if (options.page == null) {
    throw Error("Please provide the page properly");
  }
  if (options.size == null) {
    throw Error("Please provide the size properly");
  }

  const token: string = Buffer.from(`${apiKey}:${apiSecret}`, "utf8").toString(
    "base64"
  );

  let config: any = {
    method: "get",
    maxBodyLength: Infinity,
    url:
      "https://apigw.trendyol.com/integration/order/sellers/" +
      shopId +
      "/orders?page=" +
      options.page +
      "&size=" +
      options.size +
      "&orderByDirection=DESC&status=" +
      (options.status ? options.status : "") +
      "&orderbByField=" +
      (options.orderByField ? options.orderByField : "CreatedDate") +
      (options.startDate ? `&startDate=${options.startDate}` : "") +
      (options.endDate ? `&endDate=${options.endDate}` : ""),
    headers: {
      Authorization: "Basic " + token,
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": `${shopId} - SelfIntegration`,
    },
    maxRedirects: 0,
  };

  let response = await axios(config);
  let result: OrderApiResponse;
  result = response.data;
  return result;
};
