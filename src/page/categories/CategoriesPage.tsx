import React from 'react'
import ProductPageLayout from '../ProductPageLayout'

type Props = {}

const CategoriesPage = (props: Props) => {
    return (
        <ProductPageLayout 
        titleHeader='Product Catalog'
        mainMenu={"ecommerce"}
        subMenu={['Product Catalog']}>

        </ProductPageLayout>
    )
}

export default CategoriesPage