import { Box, FormControl, Grid, Typography } from '@mui/material'
import React from 'react'
import SelectCustomComponent from '../customComponent/SelectCustomComponent'
import { ButtonCustom, SelectCuttom } from '../../../page/admin/ecommerce/addProduct/AddProductStyle'
import { BsFillImageFill } from "react-icons/bs"
import ModelPopup from '../../ModelPopup'

type Props = {}
interface IFormManage1 {
  attributeSet: string,
  productType: string,
  // imageProduct:string,
}
const ManageProductOne = (props: Props) => {
  const [attributeType, setAttributeType] = React.useState<string>("Default");
  const [productType, setProductType] = React.useState<string>("Simple Product");
  const [showModel, setShowModel] = React.useState<boolean>(false);
  const [manageForm, setManageForm] = React.useState<IFormManage1>({
    attributeSet: "Default",
    productType: "Simple Product"
  })
  const formRef = React.useRef()
  const handleChange = (event: React.ChangeEvent<any>) => {
    setManageForm(prve => ({ ...prve, [event.target.name]: event.target.value }))
  }
  const handleContinute = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setShowModel(false);

    console.log(manageForm)
  }
  return (
    <Grid container sx={{
      backgroundColor: "#fff",
      borderRadius: '5px',
      marginBottom: "40px"
    }}>
      <ModelPopup
        open={showModel}
        setState={setShowModel}
        callback={handleContinute}
      />
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
              setShowModel(true);
            }}>
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
                      '& svg': {
                        verticalAlign: "middle",
                        width: "110px",
                        height: "auto"
                      }
                    }}
                  >
                    {false ? <img src="https://designreset.com/preview-equation/default/assets/img/t-shirt-5.jpg" alt="" />
                      : <BsFillImageFill />}
                  </Box>
                </Box>

                {/* thumbs-img */}
                <Box mt={4} display={"flex"} justifyContent={"center"}
                  sx={{
                    '& img': {
                      width: "50px",
                      verticalAlign: "middle",
                      borderStyle: "none",
                      overflowClipMargin: "content-box",
                      overflow: "clip"
                    }
                  }}
                >
                  {/* <Box mr={2}>
                      <img src="https://designreset.com/preview-equation/default/assets/img/t-shirt-3.jpg" alt="" />
                    </Box>
                    <Box mr={2}>
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
                    <input type="file" name="imageProducts[]" multiple style={{
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
                      <SelectCuttom
                        name="attributeSet"
                        onChange={handleChange}
                        value={manageForm.attributeSet}>
                        {[
                          'Default',
                          'Furniture',
                          'Shoes',
                          'Cell Phones',
                          'Monitors',
                          'Clothing',].map((option: string) => (
                            <option
                              key={option}
                              value={option}>{option}
                            </option>
                          ))}
                      </SelectCuttom>
                      {/* <SelectCustomComponent
                        changeHandle={handleChange}
                        name="attributeSet"
                        listOption={[
                          'Default',
                          'Furniture',
                          'Shoes',
                          'Cell Phones',
                          'Monitors',
                          'Clothing',]}
                          value={manageForm?.attributeSet} 
                          setState={setManageForm}
                      /> */}
                    </Grid>
                  </Grid>
                  <br></br>
                  {/* form-Product Type */}

                  <Grid component={FormControl} container marginBottom={'1rem'}>
                    <Grid item md={5} xs={12} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                      Product Type :
                    </Grid>
                    <Grid item md={7} xs={12} sm={12}>
                      <SelectCustomComponent
                        changeHandle={handleChange}
                        name="productType"
                        setState={setManageForm}
                        value={manageForm.productType}
                        listOption={['Simple Product', 'Configurable Product', 'Bundle Product', 'Grouped Product', 'Virtual Product', 'Downloadable Product']} />
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