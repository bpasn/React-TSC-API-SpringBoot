import ManageProductOne from '../../../../components/admin/addProductComponent/ManageProductOne'
import ManageProductTow from '../../../../components/admin/addProductComponent/ManageProductTow'
import ProductPageLayout from '../../ProductPageLayout'

type Props = {}

const AddProduct = (props: Props) => {
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