import { ProductApiResponse } from "./interfaces/IProduct";
import { Options } from "./interfaces/IOptions";
import { OrderApiResponse } from "./interfaces/IOrder";
import { FinancialApiResponse } from "./interfaces/IFinancials";
import { Settlement, SettlementApiResponse } from "./interfaces/ISettlements";

import { getAllProductsMethod } from "./methods/getAllProducts";
import { getProductDetailByBarcodeMethod } from "./methods/getProductDetailByBarcode";
import { getOrdersMethod } from "./methods/getOrders";
import { getOrderDetailByOrderIdMethod } from "./methods/getOrderDetailByOrderId";
import { getOtherFinancialsMethod } from "./methods/getOtherFinancials";
import { getSettlements } from "./methods/getSettlements";
import { getInvoiceMethod } from "./methods/getInvoice";
import { InvoiceApiResponse } from ".";

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

  public getOtherFinancials(options: Options): Promise<FinancialApiResponse[]> {
    return getOtherFinancialsMethod(this.shopId, this.apiKey, this.apiSecret, options)
  }

  public getSettlements(options: Options): Promise<Settlement[]> {
    return getSettlements(this.shopId, this.apiKey, this.apiSecret, options)
  }

  public getInvoice(options: Options): Promise<InvoiceApiResponse> {
    return getInvoiceMethod(this.shopId, this.apiKey, this.apiSecret, options)
  }

}

