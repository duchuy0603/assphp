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
// import SearchPro from './components/SearchPro';

const routers = (props => (
  //forceRefresh de reload lai
  <Router  >
    <Switch>
      {/* admin layout */}
      <Route exact path="/admin/:path/:id?">
        <AdminLayout>
          <Switch>
            <Route exact path="/admin/dashboard">
              Dashboard Page
            </Route>
            <Route exact path="/admin/listpro">
              <ListPro  {...props} />
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

            <Route exact path="/admin/listcate" children={<ListCate/>} >
              <ListCate {...props} />
            </Route>
            <Route exact path="/admin/editcategory/:id" children={<Editcategory />}>
              <Editcategory {...props} />
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
            <Route exact path="/product" children={<Page />}>
              <Page {...props} />
            </Route>
            <Route exact path="/product/:id"  >
              <ProductDetailPage {...props} />
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
          </Switch>
        </WebsiteLayout>

      </Route>
    </Switch>
  </Router>
))
export default routers;