import { ProductApiResponse } from "./interfaces/IProduct";
import { getAllProductsMethod } from "./methods/getAllProducts";
import { getProductDetailByBarcodeMethod } from "./methods/getProductDetailByBarcode";
import { getOrdersMethod } from "./methods/getOrders";
import { getOrderDetailByOrderIdMethod } from "./methods/getOrderDetailByOrderId";
import { Options } from "./interfaces/IOptions";
import { OrderApiResponse } from "./interfaces/IOrder";

export class Trendyol {
  private shopId: number
  private apiKey: string
  private apiSecret: string

  constructor(
    shopId: number,
    apiKey: string,
    apiSecret: string
  ) {
    this.shopId = shopId;
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
  }

  public getAllProducts(options: Options): Promise<ProductApiResponse> {
    return getAllProductsMethod(this.shopId, this.apiKey, this.apiSecret, options);
  }

  public getProductDetailByBarcode(options: Options): Promise<ProductApiResponse> {
    return getProductDetailByBarcodeMethod(this.shopId, this.apiKey, this.apiSecret, options);
  }

  public getOrders(options: Options): Promise<OrderApiResponse> {
    return getOrdersMethod(this.shopId, this.apiKey, this.apiSecret, options)
  }

  public getOrderDetailByOrderId(options: Options): Promise<OrderApiResponse> {
    return getOrderDetailByOrderIdMethod(this.shopId, this.apiKey, this.apiSecret, options)
  }

}

