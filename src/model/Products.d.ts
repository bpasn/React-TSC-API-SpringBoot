interface IProducts {
    id: number
    image: string[]
    productTitle: string
    price: number
    description: string
    detail: string[]
    sizes: Size[]
}

interface Size {
    size: string
    stock: number
  }