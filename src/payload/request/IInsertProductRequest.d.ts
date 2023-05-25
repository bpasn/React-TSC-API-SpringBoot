interface IInsertProductRequest {
    name: string;
    description: string;
    SKU: string;
    brand: string;
    category: string;
    color: string;
    countryOfManufacture: string;
    coupon: string;
    description: string;
    discount: string;
    inventory: string;
    keyword: string;
    shortDescription: string;
    size: string;
    status: string;
    textClass: string;
    visibility: string;
    weight: string;

}

interface IInsertImageProductRequest {
    attributeSet: string,
    productType: string,
    files: File[],
  }