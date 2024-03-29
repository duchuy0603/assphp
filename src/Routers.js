import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Header from './components/Header';
import AddProduct from './pages/admin/Product/AddProduct';
import EditProduct from './pages/admin/Product/EditProduct';
import AddCategory from './pages/admin/category/AddCategory';
import CategoryPage from './pages/product/category';
import ProductDetailPage from './pages/product/Detail';
import ListPro from './pages/product/ListPro';
import ListCate from './pages/product/ListCate';
import Editcategory from './pages/admin/category/Editcategory';
import HomePage from './pages/Home';
import AdminLayout from './layouts/admin';
import WebsiteLayout from './layouts/website';
import Signin from '././pages/user/Signin'
import Signup from '././pages/user/Signup'
import Page from './pages/product/Page';
import Pagination from './Pagination';
import Update from './pages/user/update';
import Search from './components/Search';
import Cart from './Cart/Cart';
import Itemcart from './Cart/Itemcart';
import { CartProvider } from 'react-use-cart';
// import SearchPro from './components/SearchPro';

const routers = (props => (
  //forceRefresh de reload lai
  <Router >
    <CartProvider >
    <Switch>
      {/* admin layout */}
      <Route exact path="/admin/:path/:id?">
        <AdminLayout>
          <Switch>
            <Route exact path="/admin/dashboard">
              Dashboard Page
            </Route>
            <Route exact path="/admin/listpro">
              <ListPro  {...props} children={<ListPro/>}/>
            </Route>
            <Route exact path="/admin/addproduct" >
              <AddProduct {...props} />
            </Route>
            <Route exact path="/admin/editproduct/:id" children={<EditProduct />}>
              <EditProduct {...props} />
            </Route>
            <Route exact path="/admin/addcategory" >
              <AddCategory {...props} />
            </Route>

            <Route  exact path="/admin/listcate" children={<ListCate/>} >
              <ListCate {...props} />
            </Route>
            <Route exact path="/admin/editcategory/:id" children={<Editcategory />}>
              <Editcategory {...props} />
            </Route>
        
            <Route exact path="/admin/update/:id" children={<update />}>
              <Update {...props} />
            </Route>
            {/* <Route exact path="/admin/SearchPro" >
              <SearchPro {...props} />
            </Route> */}
          </Switch>
        </AdminLayout>
      </Route>
      {/* website layout */}
      <Route>
        <WebsiteLayout>
          <Switch>



            <Route exact path="/" >
              <HomePage  {...props} />
            </Route>
       
       
            <Route exact path="/category/:id">
              <CategoryPage {...props} />
            </Route>
            <Route exact path="/user/:id" >
              <Signin />
            </Route>
            <Route exact path="/user" >
              <Signup />
            </Route>
            <Route exact path="/search" >
              <Search {...props} />
            </Route>
            <Route exact path="/pagination" >
              <Pagination {...props} />
            </Route>
            
              <Route exact path="/product/:id"  >
              <ProductDetailPage {...props} />
            </Route>
            <Route exact path="/cart" >
              <Cart {...props} />
            </Route>
            <Route exact path="/product" children={<Page />}>
              <Page {...props} />
            </Route>
            <Route exact path="/itemcart" children={<Itemcart />}>
              <Itemcart {...props} />
            </Route>
        
          </Switch>
        </WebsiteLayout>

      </Route>
    </Switch>
    </CartProvider>
  </Router>
))
export default routers;