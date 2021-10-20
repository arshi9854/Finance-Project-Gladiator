export interface product{
    productId:number,
    productName:string,
    productCost:number,
    productImage:string,
    productDescription:string
}

export interface product_noid{
    productName:string,
    productCost:number,
    productImage:string,
    productDescription:string
}

export interface buyProduct{
    userId:number,
    productId:number,
    emiScheme:number,
    paidAmount:number,
    orderDate:string,
    productName:string
}



