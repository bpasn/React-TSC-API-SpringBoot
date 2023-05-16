import { Box } from '@mui/material'
import React from 'react'
import { Crumbs, CrumbsUl, PageHeader, PageTitle, PageTitleH3 } from './AddProductStyle'

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
              <li><a href="/"><i className="flaticon-home-fill"></i></a></li>
              <li><a href="/">eCommerce</a></li>
              <li><a href="/">Add/Edit Products</a></li>
            </CrumbsUl>
          </Crumbs>
        </PageTitle>
      </PageHeader>
      <div>AddProduct</div>
    </Box>
  )
}

export default AddProduct