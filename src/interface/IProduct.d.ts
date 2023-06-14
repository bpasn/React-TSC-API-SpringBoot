import { Attributes } from "react";

interface IProducts {
    id: string,
    categories: ICategory,
    attributes: Attributes[]
    productName: string;
    SKU: string;
    price: string;
    discount: string;
    quantity: string;
    status: string;
    shortDescription: string;
    description: string;
}

interface ICategory {
    name: string,
    desc: string
}
interface IAttributes {
    attributeName: string;
    attributeValues: IAttributeValues[];
    id: string
}
interface IAttributeValues {
    attributeId: string;
    attributeValue: string;
    id: string;

}
interface IInventory {
    quantity: number
}
interface IDiscount {
    name: string,
    desc: string,
    discountPercent: number,
    active: boolean
}

interface ILoadingPage {
    name: string,
    options: Options[]
    id: string;

}