// import { useEffect } from 'react'
import ManageProductOne from '../../../../components/admin/addProductComponent/ManageProductOne'
import ManageProductTow from '../../../../components/admin/addProductComponent/ManageProductTow'
import ProductPageLayout from '../../ProductPageLayout'
// import { useAppDispatch, useAppSelector } from '../../../../redux/hook'

type Props = {}

const AddProduct = (props: Props) => {
  // const dispatch = useAppDispatch()
  //   setTimeout(() => {
  //   dispatch<any>({ type: "show", payload: { title: "Test payload", description: "Test payload description" } })
  // }, 5 * 1000)
  // https://designreset.com/preview-equation/default/ecommerce_addedit_product.html
  return (
    <ProductPageLayout
      titleHeader='Add/Edit Products'
      mainMenu={"ecommerce"}
      subMenu={['Add/Edit Products']}>
      <ManageProductOne />
      <ManageProductTow />
    </ProductPageLayout>
  )
}

export default AddProduct