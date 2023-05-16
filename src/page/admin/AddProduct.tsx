import { Box, Grid, Typography } from '@mui/material'
import { Crumbs, CrumbsA, CrumbsLi, CrumbsUl, PageHeader, PageTitle, PageTitleH3 } from './AddProductStyle'

type Props = {}

const AddProduct = (props: Props) => {
  // https://designreset.com/preview-equation/default/ecommerce_addedit_product.html
  return (
    <Box sx={{
      backgroundColor: "#e9ecef",
      padding: "0 30px",
      maxWidth: "none !improtant"
    }}>
      <PageHeader>
        <PageTitle>
          <PageTitleH3>
            Add/Edit Products
          </PageTitleH3>
          <Crumbs>
            <CrumbsUl>
              <CrumbsLi>
                <CrumbsA>
                  <i className="fa fa-home"></i>
                </CrumbsA>
              </CrumbsLi>
              <CrumbsLi>
                <CrumbsA>
                  eCommerce
                </CrumbsA>
              </CrumbsLi>
              <CrumbsLi>
                <CrumbsA sx={{
                  fontWeight: 700
                }}>
                  Add/Edit Products
                </CrumbsA>
              </CrumbsLi>
            </CrumbsUl>
          </Crumbs>
        </PageTitle>
      </PageHeader>
      <Box>
        <Grid container sx={{
          backgroundColor: "#fff",
          borderRadius: '5px'
        }}>
          <Grid item sx={{
            marginBottom: "40px",
          }} sm={12} md={12} xs={12}>
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
          <Grid item sx={{
            marginBottom: "40px",
          }} sm={12} md={12} xs={12}>
            <Box sx={{
              textAlign: "center",
              '& img': {
                width: '110px',
              }
            }}>
              <img
                style={{
                  verticalAlign: "middle",
                  borderStyle: "none",
                  overflowClipMargin: "content-box",
                  overflow: "clip"
                }}
                src="https://designreset.com/preview-equation/default/assets/img/t-shirt-5.jpg" alt="" />
            </Box>
          </Grid>
          <Grid item sx={{
            marginBottom: "40px",
          }} sm={12} md={12} xs={12}>
            <Box mt={4} display={"flex"} justifyContent={"center"}
            sx={{
              '& img':{
                width:"50px",
                verticalAlign: "middle",
                  borderStyle: "none",
                  overflowClipMargin: "content-box",
                  overflow: "clip"
              }
            }}
            >
              <Box mr={2}>
                  <img src="https://designreset.com/preview-equation/default/assets/img/t-shirt-3.jpg" alt="" />
              </Box>
              <Box mr={2}>
                  <img src="https://designreset.com/preview-equation/default/assets/img/t-shirt-2.jpg" alt="" />
              </Box>
              <Box mr={2}>
                  <img src="https://designreset.com/preview-equation/default/assets/img/t-shirt-4.jpg" alt="" />
              </Box>
              <Box sx={{
                position:"relative",
                display:"inline-flex",
                webkitBoxPack:"center",
                justifyContent:"center",
                webkitBoxAlign:"center",
                alignItems:"center",
                height:"50px",
                width:"50px",
                backgroundColor:"#f1f2f3",
                color:"#4f5163",
                border:"1px dashed"
              }}>
                  <i className='fa fa-plus-circle'></i>
                  <input type="file" multiple style={{
                    position:"absolute",
                    left:0,
                    right:0,
                    top:0,
                    bottom:0,
                    opacity:0,
                    cursor:"pointer",
                    zIndex:'99999',
                    width:"50px",
                    height:"50px"
                  }}/>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={12} xs={12}>

          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default AddProduct