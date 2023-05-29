// import { useEffect } from 'react'
import React from 'react'
import ManageProductOne from '../../../../components/admin/addProductComponent/ManageProductOne'
import ManageProductTow from '../../../../components/admin/addProductComponent/ManageProductTow'
import ProductPageLayout from '../../ProductPageLayout'

type Props = {}

const AddProduct = (props: Props) => {
  const [idInsert,setIdInsert] = React.useState<string>("")
  return (
    <ProductPageLayout
      titleHeader='Add/Edit Products'
      mainMenu={"ecommerce"}
      subMenu={['Add/Edit Products']}>
      <ManageProductOne setIdInsert={setIdInsert} idInsert={idInsert}/>
      <ManageProductTow idInsert={idInsert}/>
    </ProductPageLayout>
  )
}

export default AddProduct