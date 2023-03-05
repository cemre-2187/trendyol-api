## Trendyol Api

A Node.js library for accessing the Trendyol API, which allows you to list products, orders, and more.

## Installation
```bash
npm install @rexven-tech/trendyolapi
```

## Usage
Create class with shop credentials.

```bash
const Trendyol = require('@rexven-tech/trendyolapi');
```

or

```bash
import {Trendyol} from '@rexven-tech/trendyolapi'
```

```bash
const trendyol = new Trendyol("shopId","apiKey","apiSecret")
```


## API Reference

# List All Products;

Returns a list of all products

```bash
let options={
  page:0,
  size:50
};

let products= await trendyol.getAllProducts(options);
```

| option                  | Description                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| page                    | Page parameter starts from 0                                                                      |
| size                    | Determine how many products will return from request. Max value 200                               |

# List One Product By Barcode;

Returns a product 

```bash
let options={
  barcode:"product barcode"
};

let product= await trendyol.getProductDetailByBarcode(options);
```

| option                  | Description                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| barcode                 | Product Barcode                                                                                  |



# List All Orders;

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



# List One Order By Order Number;

Returns an order 

```bash
let options={
  orderId:"Order Number"
};

let order= await trendyol.getOrderDetailByOrderId(options);
```

| option                  | Description                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| orderId                 | Order Number                                                                                      |

## More is coming

Contributions are welcome! 
