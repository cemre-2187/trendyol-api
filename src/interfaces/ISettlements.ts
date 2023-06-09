export interface SettlementApiResponse {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    content: Settlement[];
}

export interface Settlement {
    id: string,
    transactionDate: number,
    barcode: string,
    transactionType: string,
    receiptId: number,
    description: string,
    debt: number,
    credit: number,
    paymentPeriod: number,
    commissionRate: number,
    commissionAmount: number,
    commissionInvoiceSerialNumber: string,
    sellerRevenue: number,
    orderNumber: string,
    paymentOrderId: number,
    paymentDate: number,
    sellerId: number,
    storeId: number,
    storeName: string,
    storeAddress: string
}