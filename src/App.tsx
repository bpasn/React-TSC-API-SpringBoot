import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import './App.css';
import ProtectComponent from './components/ProtectComponent';
import Signinpage from './page/Signinpage';
import Layout from './components/Layout';
import ProductDetail from './page/product/productDetail/ProductDetail';
import ProductPage from './page/ProductPage';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ProtectProduct from './components/product/ProtectProduct';
import Exception from './page/Exception';
// import './assets/css/fa-icons.css'
import './assets/css/faa-icons.css'
import React from 'react';
import AddProduct from './page/admin/ecommerce/addProduct/AddProduct';
import LayoutAdmin from './components/admin/LayoutAdmin';
import AddCategory from './page/admin/ecommerce/addCategory';
function App() {


  return (
    <BrowserRouter >
      <Routes>
        <Route path={'/'} element={<ProtectComponent />} >
          <Route element={<Layout />}>
            <Route element={<ProtectProduct />}>
              <Route index element={<ProductPage />} />
              <Route path='/product/detail/:id' element={<ProductDetail />} />
            </Route>
          </Route>
          <Route path='admin' element={<LayoutAdmin/>}>
                <Route path="ecommerce" element={<Outlet/>}>
                    <Route path='add-product' element={<AddProduct/>} />
                    <Route path='add-categories' element={<AddCategory/>} />
                </Route>
          </Route>
        </Route>
        <Route path='/login' element={<Signinpage />} />
        <Route path='/Execption' element={<Exception />} />
        <Route path='/*'  element={<Exception /> }/>
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
