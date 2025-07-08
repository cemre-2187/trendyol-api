import axios from "axios";
import { ProductApiResponse } from "../interfaces/IProduct";
import { Options } from "../interfaces/IOptions";

export const getProductDetailByBarcodeMethod = async (
  shopId: number,
  apiKey: string,
  apiSecret: string,
  options: Options
): Promise<ProductApiResponse> => {
  if (!options.barcode) {
    throw Error("Please provide barcode properly");
  }

  const token: string = Buffer.from(`${apiKey}:${apiSecret}`, "utf8").toString(
    "base64"
  );

  let config: any = {
    method: "get",
    maxBodyLength: Infinity,
    url:
      "https://apigw.trendyol.com/integration/product/sellers/" +
      shopId +
      "/products?page=0&size=50&approved=True&barcode=" +
      options.barcode,
    headers: {
      Authorization: "Basic " + token,
    },
    maxRedirects: 0,
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": `${shopId} - SelfIntegration`,
  };

  let response = await axios(config);
  let result: ProductApiResponse;
  result = response.data;
  return result;
};
