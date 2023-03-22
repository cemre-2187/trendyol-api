# Trendyol Api

A Node.js library for accessing the Trendyol API, which allows you to list products, orders, and more.

# Installation
```bash
npm install @rexven-tech/trendyolapi
```

# Usage
Create class with shop credentials.



```bash
const {Trendyol} = require('@rexven-tech/trendyol-api');
```

or

```bash
import {Trendyol} from '@rexven-tech/trendyol-api'
```

Get credentials from account page.

![alt text](https://github.com/cemre-2187/trendyol-api/blob/main/Ekran%20Resmi%202023-03-06%2009.34.17.png?raw=true)

```bash
const trendyol = new Trendyol("shopId","apiKey","apiSecret")
```


# API Reference

## List All Products;

Returns a list of all products

```bash
let options={
  page:0,
  size:50,
  startDate:1679321575388, // optional
  dateType:LAST_MODIFIED_DATE //optional
};

let products= await trendyol.getAllProducts(options);
```

| option                  | Description                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| page                    | Page parameter starts from 0                                                                      |
| size                    | Determine how many products will return from request. Max value 200                               |
| startDate               | Use Timestamp fromat                                                                              |
| dateType                | Determine date filter option. CREATED_DATE or LAST_MODIFIED_DATE can be send for dateType         |

## List One Product By Barcode;

Returns a product 

```bash
let options={
  barcode:"product barcode"
};

let product= await trendyol.getProductDetailByBarcode(options);
```

| option                  | Description                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| barcode                 | Product Barcode                                                                                   |



## List All Orders;

Returns a list of all orders

```bash
let options={
  page:0,
  size:50,
  status:"Created" //optional 
};

let orders= await trendyol.getOrders(options);
```

| option                  | Description                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| page                    | Page parameter starts from 0                                                                      |
| size                    | Determine how many products will return from request. Max value 200                               |



## List One Order By Order Number;

Returns an order 

```bash
let options={
  orderId:"Order Number"
};

let order= await trendyol.getOrderDetailByOrderId(options);
```

| option                  | Description                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| orderId                 | Order Number    

## Get Other Financials;

Returns an order 

```bash
let options={
  day:17,
  transactionType:"DeductionInvoices"
};

let order= await trendyol.getOtherFinancials(options);
```

| option          | Description                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| day             | How many days before now for data date range                                                                           |
| transactionType | CashAdvance, WireTransfer, IncomingTransfer, ReturnInvoice, CommissionAgreementInvoice, PaymentOrder,DeductionInvoices |   

# More is coming

Contributions are welcome! 
