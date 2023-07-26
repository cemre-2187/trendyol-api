export interface OrderApiResponse {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  content: Order[];
}
export interface Order {
  shipmentAddress: ShipmentAddress;
  orderNumber: string;
  grossAmount: number;
  totalDiscount: number;
  totalTyDiscount: number;
  taxNumber?: any;
  invoiceAddress: InvoiceAddress;
  customerFirstName: string;
  customerEmail: string;
  customerId: number;
  customerLastName: string;
  id: number;
  cargoTrackingNumber: number;
  cargoTrackingLink: string;
  cargoSenderNumber: string;
  cargoProviderName: string;
  lines: Line[];
  orderDate: number;
  tcIdentityNumber: string;
  currencyCode: string;
  packageHistories: PackageHistories[];
  shipmentPackageStatus: string;
  status: string;
  deliveryType: string;
  timeSlotId: number;
  scheduledDeliveryStoreId: string;
  estimatedDeliveryStartDate: number;
  estimatedDeliveryEndDate: number;
  totalPrice: number;
  deliveryAddressType: string;
  agreedDeliveryDate: number;
  fastDelivery: boolean;
  originShipmentDate: number;
  lastModifiedDate: number;
  commercial: boolean;
  fastDeliveryType: string;
  deliveredByService: boolean;
  agreedDeliveryDateExtendible: boolean;
  extendedAgreedDeliveryDate: number;
  agreedDeliveryExtensionEndDate: number;
  agreedDeliveryExtensionStartDate: number;
  warehouseId: number;
  groupDeal: boolean;
}
export interface ShipmentAddress {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  cityCode: number;
  district: string;
  districtId: number;
  postalCode: string;
  countryCode: string;
  neighborhoodId: number;
  neighborhood: string;
  phone?: string;
  fullAddress: string;
  fullName: string;
}
export interface InvoiceAddress {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  cityCode: number;
  district: string;
  districtId: number;
  postalCode: string;
  countryCode: string;
  neighborhoodId: number;
  neighborhood: string;
  phone?: any;
  fullAddress: string;
  fullName: string;
}
export interface Line {
  quantity: number;
  salesCampaignId: number;
  productSize: string;
  merchantSku: string;
  productName: string;
  productCode: number;
  merchantId: number;
  amount: number;
  discount: number;
  tyDiscount: number;
  discountDetails: DiscountDetails[];
  currencyCode: string;
  productColor: string;
  id: number;
  sku: string;
  vatBaseAmount: number;
  barcode: string;
  orderLineItemStatusName: string;
  price: number;
  fastDeliveryOptions?: any;
  productCost: number;
  adCost: number;
  shippingCost: number;
  status: string;
  trCut: number;
  trOrderId: number;
  trProductId: number;
  producerId: number
  totalVat?: number
}
export interface DiscountDetails {
  lineItemPrice: number;
  lineItemDiscount: number;
  lineItemTyDiscount: number;
}
export interface PackageHistories {
  createdDate: number;
  status: string;
}