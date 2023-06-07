// import { useEffect } from 'react'
import React from 'react'
import ManageProductOne from '../../../../components/admin/addProductComponent/ManageProductOne'
import ManageProductTow from '../../../../components/admin/addProductComponent/ManageProductTow'
import ProductPageLayout from '../../ProductPageLayout'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import useAxiosHook from '../../../../axios-hook/axiosHook'
import { loadingPage } from '../../../../action/product.action'
import useEffectHook from '../../../../hook/useEffectHook'
import { Box, CircularProgress } from '@mui/material'
type Props = {}

const AddProduct = (props: Props) => {
  const [idInsert, setIdInsert] = React.useState<string>("")
  const dispatch = useAppDispatch();
  const axiosHook = useAxiosHook();
  const { loading, loadPage } = useAppSelector(state => state.LoadPage);
  useEffectHook(() => {
    dispatch<any>(loadingPage(axiosHook));
  })
  return loading ? 
  (<Box display={"flex"} justifyContent={"center"}>
    <CircularProgress />
  </Box>) : (
    <ProductPageLayout
      titleHeader='Add/Edit Products'
      mainMenu={"ecommerce"}
      subMenu={['Add/Edit Products']}>
      <ManageProductOne loadPage={loadPage as ILoadingPage[]} setIdInsert={setIdInsert} idInsert={idInsert} />
      <ManageProductTow loadPage={loadPage  as ILoadingPage[]} idInsert={idInsert} />
    </ProductPageLayout>
  )
}

export default AddProduct