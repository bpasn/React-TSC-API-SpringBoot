interface IProducts {
    id:string,
    desc:string,
    name:string,
    category:ICategory,
    inventory:IInventory,
    price:number,
    discount:IDiscount,
    sku:string
}

interface ICategory{
    name:string,
    desc:string
}
interface IInventory{
    quantity:number
}
interface IDiscount{
    name:string,
    desc:string,
    discountPercent:number,
    active:boolean
}