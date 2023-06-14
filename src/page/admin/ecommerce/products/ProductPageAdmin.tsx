import ProductPageLayout from '../../../ProductPageLayout'
import PageLayOutHeader from '../../../PageLayOutHeader'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Box, CircularProgress } from '@mui/material'
import useEffectHook from '../../../../hook/useEffectHook'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import axios, { AxiosError } from 'axios'
import AppSetting from '../../../../constance/AppSetting'
import { ButtonCustom2 } from '../addProduct/AddProductStyle'
import { IProducts } from '../../../../interface/IProduct'
type Props = {}

const ProductPageAdmin = (props: Props) => {
  const [product, setProduct] = React.useState<IProducts[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const dispatch = useAppDispatch()
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },

    {
      field: '',
      headerName: 'Image',
      sortable: false,
      width: 100,
      headerClassName: 'hideRightSeparator',
      renderCell: (param) => {
        console.log(param.row.categories.imagePath)
        return <Box width={"60px"} height={"60px"} borderRadius={20}>
          <img style={{
            objectFit:"fill",
            width:"100%",
            height:"100%"
          }}src={"/" + param.row.categories.imagePath.replace(/(src\/main\/resources\/storage\/)/, "")} />
        </Box>
      }
    },
    {
      field: 'productName',
      headerName: 'Name',
      sortable: false,
      headerClassName: 'hideRightSeparator',
    },
    {
      field: 'categories',
      headerName: 'Category',
      sortable: false,
      headerClassName: 'hideRightSeparator',
      valueGetter(params) {
        return params.value.categoryName.substring(0, 1).toUpperCase() + params.value.categoryName.substring(1)
      },
    },
    {
      field: 'sku',
      headerName: 'SKU',
      headerClassName: 'hideRightSeparator',
      sortable: false,
      minWidth: 150
    },
    {
      field: 'price',
      hideSortIcons: true,
      headerName: 'Price',
      sortable: false,
      headerClassName: 'hideRightSeparator',
      headerAlign: 'center',
      align: "center",
      // renderCell: (data) => ButtonAction(data)
    },
    {
      field: 'quantity',
      hideSortIcons: true,
      headerName: 'Quantity',
      sortable: false,
      headerClassName: 'hideRightSeparator',
      headerAlign: 'center',
      align: "center",
      // renderCell: (data) => ButtonAction(data)
    },
    {
      field: '',
      headerName: 'Status',
      sortable: false,
      headerClassName: 'hideRightSeparator',
      valueGetter(params) {
        return params?.row.categories?.status ? `${params?.row.categories?.status}` : ''
      },
    },
    // {
    //   field: '',
    //   hideSortIcons: true,
    //   headerName: 'Action',
    //   sortable: false,
    //   headerClassName: 'hideRightSeparator',
    //   minWidth: 350,
    //   headerAlign: 'center',
    //   align: "center",
    //   renderCell: (data) => <ButtonCustom2>Action</ButtonCustom2>
    // },
  ];
  interface IResp {
    success: boolean;
    payload: IProducts[]
  }
  useEffectHook(() => {
    const fetchData = async () => {
      dispatch<any>({
        type: "SHOW_LOADING",
      })
      setLoading(true)
      try {
        const { data } = await axios.get<IResp>(AppSetting.GET_PRODUCT_LIST)
        console.log(data.payload)
        if (data.success) {
          setProduct(data.payload)
        }
        dispatch<any>({
          type: "HIDE_LOADING",
        })

        setLoading(false)
      } catch (error) {
        setLoading(false)
        dispatch<any>({
          type: "SHOW",
          payload: {
            message: error instanceof AxiosError ? error.response && error.response.data.message : error instanceof Error && error.message
          }
        })
        dispatch<any>({
          type: "HIDE_LOADING",
        })
      }
    }
    fetchData()
    return () => {
      setLoading(false)
    }
  })
  return loading ? <></> : (
    <ProductPageLayout
      titleHeader='Products'
      mainMenu={"ecommerce"}
      subMenu={['Products']}
    >
      <Box>
        {product.length ? <PageLayOutHeader title={'Products List'}>
          <DataGrid

            slots={{
              loadIcon: CircularProgress,
            }}
            sx={{
              '& .hideRightSeparator > .MuiDataGrid-columnSeparator': {
                display: 'none',
              },
            }}
            getRowId={(row) => row.id}
            rows={product}
            initialState={{
              // ...product,
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            columns={columns}
            pageSizeOptions={[5, 10, 15]}
            // rowsPerPageOptions={[10]}
            disableRowSelectionOnClick
            disableColumnMenu
            disableDensitySelector
            disableColumnSelector
            // disableRowSelectionOnClick
            components={{
              LoadingOverlay: CircularProgress,
            }}
            loading={false}
          />
        </PageLayOutHeader> : ''}
      </Box>
    </ProductPageLayout>
  )
}

export default ProductPageAdmin