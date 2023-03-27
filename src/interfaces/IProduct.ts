
export interface ProductApiResponse {
  page: number,
  size: number,
  totalElements: number,
  totalPages: number
  content: Product[]
}

export interface Product {
  approved: boolean,
  archived: boolean,
  attributes: Attribute[],
  barcode: string,
  batchRequestId: string,
  brand: string,
  brandId: number,
  categoryName: string,
  createDateTime: number,
  description: string,
  dimensionalWeight: number,
  gender: string,
  hasActiveCampaign: boolean,
  id: string,
  lastPriceChangeDate: number,
  lastStockChangeDate: number,
  lastUpdateDate: number,
  listPrice: number,
  locked: boolean,
  onSale: boolean,
  pimCategoryId: number,
  platformListingId: string,
  productCode: number,
  productContentId: number,
  productMainId: string,
  quantity: number,
  salePrice: number,
  stockCode: string,
  stockId: string,
  stockUnitType: string,
  supplierId: number,
  title: string,
  vatRate: number,
  version: number,
  rejected: boolean,
  rejectReasonDetails: any,
  blacklisted: boolean,
  images: Image[]
}
interface Attribute {
  attributeId: number,
  attributeName: string,
  attributeValue: string,
  attributeValueId: number
}

interface Image {
  url: string
}
