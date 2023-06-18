import ProductPageLayout from '../../../ProductPageLayout'
import PageLayOutHeader from '../../../PageLayOutHeader'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Box, CircularProgress, Grid, ThemeProvider, createTheme } from '@mui/material'
import useEffectHook from '../../../../hook/useEffectHook'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import axios, { AxiosError } from 'axios'
import AppSetting from '../../../../constance/AppSetting'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { pink } from '@mui/material/colors'
import SearchAutocomplete from '../../../../components/autocomplete/SearchAutoComplete'
import { LabelType, labels } from '../../../../components/autocomplete/datamock'
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
  const [search, setSearch] = React.useState<"search" | 'success' | ''>('');
  const [message, setMessage] = React.useState<string>('Please enter 4 or mor characters');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const dispatch = useAppDispatch()
  const [getLabels, setLabels] = React.useState<LabelType[]>([]);

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
      width: 150,
      headerClassName: 'hideRightSeparator',
    },
    {
      field: 'categoryName',
      headerName: 'Category',
      sortable: false,
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
        return params.value === "ACTIVE" ? <LocalMallIcon color="primary" /> : <LocalMallIcon sx={{
          width: "2.5em",
          height: "2.5em",
          color: pink[500]
        }} />
      },
    },
    {
      flex: 1,
      field: 'action',
      hideSortIcons: true,
      headerName: 'Action',
      sortable: false,
      headerClassName: 'hideRightSeparator',
      minWidth: 100,
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
    payload: IProducts[]
  }
  const autocomplete = () => {
    setSearch("search")
    setTimeout(() => {
      setLabels(labels)
      setSearch("success")
    }, 3 * 1000)
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
            severity: "error",
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
  React.useEffect(() => {
    if (value.length >= 4) {
      autocomplete();
    } else if(value && value.length < 4){
      setLabels([])
      setMessage("Please enter 4 or more charactor")
    }
    
  }, [value])
  console.log(getLabels)
  return loading ? <></> : (
    <ThemeProvider theme={theme}>
      <ProductPageLayout
        titleHeader='Products'
        mainMenu={"ecommerce"}
        subMenu={['Products']}
      >
        <Box component={Grid} container >
          <Grid item md={4} xl={2} sm={12} xs={12}>
            <SearchAutocomplete message={message} searching={search} labels={getLabels} setState={setValue} />
          </Grid>
        </Box>
        {product.length ? <PageLayOutHeader title={'Products List'}>
          <Box sx={{
            padding: '2rem'
          }}>
            <DataGrid

              slots={{
                loadIcon: CircularProgress,
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
              }}
              getRowId={(row) => row.id}
              rows={product}
              initialState={{
                // ...product,
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              rowHeight={70}
              columns={columns}
              pageSizeOptions={[5, 10, 15]}
              disableRowSelectionOnClick
              disableColumnMenu
              // disableDensitySelector
              // disableColumnSelector
              components={{
                LoadingOverlay: CircularProgress,
              }}
              loading={false}
            />
          </Box>
        </PageLayOutHeader> : ''}
      </ProductPageLayout>
    </ThemeProvider>
  )
}

export default ProductPageAdmin