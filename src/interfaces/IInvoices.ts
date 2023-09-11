
export interface InvoiceApiResponse {
    page: number,
    size: number,
    totalElements: number,
    totalPages: number
    content: Invoice[]
}

export interface Invoice {
    shipmentPackageType: string,
    parcelUniqueId: number,
    orderNumber: string,
    amount: number,
    desi: number
}