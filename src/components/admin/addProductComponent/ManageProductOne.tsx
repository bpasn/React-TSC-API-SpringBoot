import { Box, FormControl, Grid, Typography } from '@mui/material'
import React from 'react'
import { ButtonCustom } from '../../../page/admin/ecommerce/addProduct/AddProductStyle'
import { BsFillImageFill } from "react-icons/bs"
import { useAppDispatch } from '../../../redux/hook'
import { SelectBox } from '../customComponent/SelectBox'
import dataMock from '../../../mock/datamock.json'
import axios from 'axios'
type Props = {}
interface IFormManage1 {
  attributeSet: string,
  productType: string,
  files: File[]
  imageProduct: {
    base64: string | ArrayBuffer | null;
    filename: string;
  }[],
}
const ManageProductOne = (props: Props) => {
  const [manageForm, setManageForm] = React.useState<IFormManage1>({
    attributeSet: "Default",
    productType: "Simple Product",
    files: [],
    imageProduct: []
  })
  const dispatch = useAppDispatch();
  const formRef = React.useRef()
  const filesRef = React.useRef<HTMLInputElement | null>();

  const inputFileChange = () => {
    let files = filesRef.current?.files
    if (!files?.length) return;
    for (let i: number = 0; i < files.length; i++) {
      let reader = new FileReader();
      let file = files[i];
      if(files[i]){
        setManageForm(prve => ({
          ...prve, files: [
            ...prve.files, file
          ],
        }))
      }
      let url = reader.readAsDataURL(files[i])
      let filename = files[i].name;
      reader.onload = () => {
        setManageForm(prve => ({
          ...prve, imageProduct: [
            ...prve.imageProduct, {
              filename: filename,
              base64: reader.result as string,
            },
          ],
        }))
      }
    }
  }
  

  const handleChange =  (event: React.ChangeEvent<any>) => {
    setManageForm(prve => ({ ...prve, [event.target.name]: event.target.value }))
  }
  const handleContinute = async (event: React.FormEvent<HTMLInputElement>): Promise<void> => {
    event.preventDefault();
    dispatch<any>({ type: "hide" })
    await axios.post('/api/product/test',manageForm)
  }
  return (
    <Grid container sx={{
      backgroundColor: "#fff",
      borderRadius: '5px',
      marginBottom: "40px"
    }}>
      <Grid item sm={12} xs={12} md={12} >
        <Box className="statbox widget box box-shadow"
          component={'div'}>
          <Box className="widget-header">
            <Grid container>
              <Grid item sm={12} md={12} xs={12} >
                <Box sx={{
                  padding: "25px 15px",
                }}>
                  <Typography sx={{
                    fontFamily: 'Open Sans,"Helvetica Neue",Helvetica,Arial,sans-serif',
                    fontSize: "16px",
                    color: "#000",
                    fontWeight: 600,
                    margin: 0,
                  }} variant="h4" color="initial">Add / Manage Product</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="widget-content widget-content-area add-manage-product-1"
            component={"form"}
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch<any>({
                type: "show",
                payload: {
                  title: "Confirm Submit",
                  description: "Do you really want to submit the form?",
                  callback: handleContinute
                }
              })
            }}
          >
            <Grid container >
              {/* LEFT */}
              <Grid item xl={4} lg={4} md={12} sm={12} xs={12} textAlign={"center"} mb={5} >
                {/* product-img */}
                <Box
                  textAlign={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  className={"product-img"}
                  sx={{
                    '& img': {
                      width: '110px',
                    }
                  }}>
                  <Box width="110px"
                    sx={{
                      verticalAlign: 'middle',
                      borderStyle: 'none',
                      overflowClipMargin: "content-box",
                      overflow: "clip",
                      '& img': {
                        height: '110px',
                        objectFit: 'contain',
                      },
                      '& svg': {
                        verticalAlign: "middle",
                        width: "110px",
                        height: "auto"
                      }
                    }}
                  >
                    {manageForm.imageProduct.length ? <img src={manageForm.imageProduct[0].base64 as string} alt="" />
                      : <BsFillImageFill />}
                  </Box>
                </Box>

                {/* thumbs-img */}
                <Box mt={4} display={"flex"} justifyContent={"center"}
                  sx={{
                    flexFlow: "wrap",
                    rowGap: '1rem',
                    columnGap: '1rem',
                    '& img': {
                      width: "50px",
                      verticalAlign: "middle",
                      borderStyle: "none",
                      overflowClipMargin: "content-box",
                      overflow: "clip"
                    }
                  }}
                >
                  {manageForm.imageProduct.length ? manageForm.imageProduct.slice(1).map((img, index: number) => (
                    <Box mr={2} key={img.filename + index}>
                      <img src={img.base64 as string} alt="product" />
                    </Box>
                  )) : <></>}
                  {/* <Box mr={2}>
                      <img src="https://designreset.com/preview-equation/default/assets/img/t-shirt-2.jpg" alt="" />
                    </Box>
                    <Box mr={2}>
                      <img src="https://designreset.com/preview-equation/default/assets/img/t-shirt-4.jpg" alt="" />
                    </Box> */}
                  {/* file-input */}
                  <Box sx={{
                    position: "relative",
                    display: "inline-flex",
                    webkitBoxPack: "center",
                    justifyContent: "center",
                    webkitBoxAlign: "center",
                    alignItems: "center",
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#f1f2f3",
                    color: "#4f5163",
                    border: "1px dashed"
                  }}>
                    <i className='fa fa-plus-circle'></i>
                    <Box component="input"
                      onChange={inputFileChange}
                      type="file" name="imageProducts[]" ref={filesRef} multiple style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        opacity: 0,
                        cursor: "pointer",
                        zIndex: '99999',
                        width: "50px",
                        height: "50px"
                      }} />
                  </Box>
                </Box>
              </Grid>
              {/* RIGHT */}
              <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                {/* form-horizontal Attribute */}
                <Box component={'div'} sx={{
                  padding: {
                    md: "65px",
                    sm: 0,
                    xs: 0
                  }
                }}>
                  <Grid component={FormControl} container marginBottom={'1rem'}>
                    <Grid item md={5} sm={12} xs={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                      Attribute Set :
                    </Grid>
                    <Grid item md={7} sm={12} xs={12}>
                      <SelectBox
                        options={dataMock.attributeSet}
                        onChange={handleChange}
                        name={'attributeSet'} />

                    </Grid>
                  </Grid>
                  <br></br>
                  {/* form-Product Type */}

                  <Grid component={FormControl} container marginBottom={'1rem'}>
                    <Grid item md={5} xs={12} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                      Product Type :
                    </Grid>
                    <Grid item md={7} xs={12} sm={12}>
                      <SelectBox
                        name="productType"
                        onChange={handleChange}
                        value={manageForm.productType}
                        options={dataMock.productType} />
                    </Grid>
                  </Grid>
                  <br></br>
                  <Box textAlign={"center"} margin={"0 auto"}>
                    <ButtonCustom type='submit'>Continute</ButtonCustom>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ManageProductOne