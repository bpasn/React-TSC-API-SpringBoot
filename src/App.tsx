import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import ProtectComponent from './components/ProtectComponent';
import Signinpage from './page/Signinpage';
import Layout from './components/Layout';
import ProductDetail from './page/product/productDetail/ProductDetail';
import ProductPage from './page/ProductPage';
import 'pure-react-carousel/dist/react-carousel.es.css';
function App() {
  return (
      <BrowserRouter >
        <Routes>
          <Route path={'/'} element={<ProtectComponent />} >
            <Route element={<Layout />}>
              <Route index element={<ProductPage />}/>
              <Route path='/product/detail/:id' element={<ProductDetail  />} />
            </Route>
          </Route>
          <Route path='/login' element={<Signinpage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
