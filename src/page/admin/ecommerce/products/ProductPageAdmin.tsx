import ProductPageLayout from '../../../ProductPageLayout'
import PageLayOutHeader from '../../../PageLayOutHeader'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Box, CircularProgress, Pagination, Stack, ThemeProvider, createTheme } from '@mui/material'
import useEffectHook from '../../../../hook/useEffectHook'
import React from 'react'
import { useAppDispatch } from '../../../../redux/hook'
import axios, { AxiosError } from 'axios'
import AppSetting from '../../../../constance/AppSetting'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { pink } from '@mui/material/colors'
import { LabelType } from '../../../../components/autocomplete/datamock'

import { useDemoData } from '@mui/x-data-grid-generator';
import PaginationComponent from '../../../../components/pagination/PaginationComponent'


type Props = {}
const theme = createTheme({
  typography: {
    fontFamily: [
      "FontAwesome"
    ].join(",")
  },
})
const ProductPageAdmin = (props: Props) => {
  const [product, setProduct] = React.useState<IProducts[]>([]);
  const [indexOfFirstPage, setIndexOfFirstPage] = React.useState<number>(0);
  const [indexOfLastPage, setIndexOfLastPage] = React.useState<number>(5);
  const [countProduct, setCountProduct] = React.useState<number>(0)
  const [loading, setLoading] = React.useState<boolean>(false);
  const dispatch = useAppDispatch()
  const [currentPage, setCurrentPage] = React.useState<number>(1)
  const [itemPage] = React.useState<number>(5)
 

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'image',
      width: 80,
      headerName: 'Image',
      sortable: false,
      headerClassName: 'hideRightSeparator',
      renderCell: (param) => {
        return (
          <div style={{
            borderRadius: "20px",
            margin: 'auto',
            width: '100%',
            height: '100%',
            display: 'grid',
            padding: "12px 7px"
          }}>
            <Box
              component={"img"}
              sx={{

                maxWidth: '100%',
                maxHeight: '100%',
                height: "100%",
                margin: 'auto',/* x,y center if inside a grid or flex box */
                objectFit: 'cover',/* useless by now, img should keep its ratio */
                borderRadius: '10px',
                backgroundColor: 'Crimson',
              }} src={param.value} />
          </div>
        )
      }
    },
    {
      field: 'productName',
      headerName: 'Name',
      sortable: false,
      minWidth: 150,
      headerClassName: 'hideRightSeparator',
    },
    {
      field: 'categoryName',
      headerName: 'Category',
      sortable: false,
      minWidth: 100,
      headerClassName: 'hideRightSeparator',
    },
    {
      field: 'sku',
      headerName: 'SKU',
      headerClassName: 'hideRightSeparator',
      sortable: false,
      minWidth: 170
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
      // headerClassName: 'hideRightSeparator',
      headerAlign: 'center',
      align: "center",
      // renderCell: (data) => ButtonAction(data)
    },
    {
      field: 'active',
      headerName: 'Status',
      sortable: false,
      align: "center",
      minWidth: 40,
      renderCell(params) {
        return params.row.id % 2 === 0 ? <LocalMallIcon sx={{
          width: "2.5em",
          height: "2.5em",
        }} color="primary" /> : <LocalMallIcon sx={{
          width: "2.5em",
          height: "2.5em",
          color: pink[500]
        }} />
      },
    },
    {
      flex: 1,
      minWidth: 150,
      field: 'action',
      hideSortIcons: true,
      headerName: 'Action',
      sortable: false,
      headerClassName: 'hideRightSeparator',
      headerAlign: 'center',
      align: "center",
      renderCell: (data) => <Box display={"flex"} justifyContent={"center"} gap={"1rem"}>
        <FaPencilAlt size={24} color='#d3d3d3' />
        <FaTrashAlt size={24} color='#d3d3d3' />
      </Box>
    },

  ];
  interface IResp {
    success: boolean;
    payload: {
      count: number,
      products: IProducts[]
    }
  }
  const fetchData = async () => {
    dispatch<any>({
      type: "SHOW_LOADING",
    })
    setLoading(true)
    try {
      const { data } = await axios.get<IResp>(AppSetting.GET_PRODUCT_LIST, {
        params: {
          limit: indexOfFirstPage,
          offset: indexOfLastPage
        }
      })
      if (data.success) {
        setProduct(data.payload.products)
        setCountProduct(data.payload.count)
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
          severity: "error",
          message: error instanceof AxiosError ? error.response && error.response.data.message : error instanceof Error && error.message
        }
      })
      dispatch<any>({
        type: "HIDE_LOADING",
      })
    }
  }
  useEffectHook(() => {
    setIndexOfLastPage(currentPage * itemPage)
    setIndexOfFirstPage(indexOfLastPage - itemPage)
    fetchData()
    return () => {
      setLoading(false)
    }
  })


  return loading ? <></> : (
    <ThemeProvider theme={theme}>
      <ProductPageLayout
        titleHeader='Products'
        mainMenu={"ecommerce"}
        subMenu={['Products']}
      >
        <PageLayOutHeader title={'Products List'}>
          <Box sx={{
            padding: '2rem'
          }}>
            <DataGrid
              initialState={{
                pagination: {
                  paginationModel: { pageSize: itemPage }
                },
              }}
              slots={{
                pagination: () => {
                  return (
                    <PaginationComponent
                      shape="rounded"
                      currentPage={currentPage}
                      itemPerPage={itemPage}
                      totalPage={countProduct}
                      onChange={(e: React.ChangeEvent<unknown>, value: number) => {
                        setCurrentPage(value)
                        setIndexOfFirstPage(indexOfLastPage)
                        setIndexOfLastPage(indexOfLastPage + 5)
                        fetchData()
                      }}
                    />)
                },
                noResultsOverlay: () => (
                  <Stack height={!product.length ? "150px" : "100%"} alignItems="center" justifyContent="center">
                    No rows in DataGrid
                  </Stack>
                ),
                loadIcon: CircularProgress,
                noRowsOverlay() {
                  return (<Stack height={!product.length ? "150px" : "100%"} alignItems="center" justifyContent="center">
                    No rows in DataGrid
                  </Stack>)
                }
              }}
              showCellVerticalBorder
              showColumnVerticalBorder
              sx={{
                fontSize: "14px",
                boxShadow: 2,
                '& .MuiDataGrid-cell:hover': {
                  color: 'primary.main',
                },
                '& .hideRightSeparator > .MuiDataGrid-columnSeparator': {
                  display: 'none',
                },
                '& .MuiDataGrid-columnHeader--withRightBorder:last-child': {
                  borderColor: "transparent",
                  borderRightWidth: "0",
                  borderRightStyle: "none"
                },
                '& .MuiDataGrid-virtualScroller': {
                  height: !product.length ? "150px !important" : "100% !important"
                }
              }}

              getRowId={(row) => row.id}
              rows={product}
              rowHeight={70}
              columns={columns}
              pageSizeOptions={[5, 10, 15]}
              disableRowSelectionOnClick
              disableColumnMenu
            // disableDensitySelector
            // disableColumnSelector
            />
          </Box>
        </PageLayOutHeader>
      </ProductPageLayout>
    </ThemeProvider>
  )
}

export default ProductPageAdmin