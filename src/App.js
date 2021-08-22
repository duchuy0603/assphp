import './App.css';

import { useState, useEffect, useLayoutEffect } from "react";
import Routers from "./Routers"
import Header from './components/Header';
import ProductApi from "./api/ProductApi"
import CategoryApi from './api/CategoryApi';
import UserApi from './api/UserApi';
import { uuidv4 as v4 } from "uuid"
import ListCate from './pages/product/ListCate';
import { useParams } from 'react-router-dom';
import Cart from './Cart/Cart';
import ProductDetailPage from './pages/product/Detail';
import { CartProvider } from 'react-use-cart';

function App() {
  
  ///product
  const [todos, setTodos] = useState([]);
  
  
  useEffect(() => {
    console.log("sau");
  const listtodo = async () => {
  
    try {
      // const {data:products}=await ProductApi.getAll();
         const {data:product}=await ProductApi.getAll();
      setTodos(product);
    
   
    } catch (error) {
      console.log(error)
    };
  }
  listtodo();
  return ()=>{
    console.log("truoc");
    setTodos(null);
   
    
    };
     // didupdate
  }, [])

  const onHandleAdd = async (product,userId) => {
    try {

      const { data } = await ProductApi.add(product,userId);
      setTodos([
        ...todos,
        data
      ])
    } catch (error) {
      console.log(error);
    }
  }
    
  const onHandleEdit = async (id,userId ,product) => {
    try {
      await ProductApi.update(id,userId, product);
      const { data: products } = await ProductApi.getAll();
      setTodos(products);
   

    } catch (error) {
      console.log(error)
    }
  }
  const onHandleRemove = async (id,userId) => {
    try {
      const { data } = await ProductApi.remove(id,userId);
      console.log(data);
      const newTodos = todos.filter(item => item._id !== id);
      setTodos(newTodos)
    } catch (error) {
      console.log(error);
    }
  }
//   const [listdetail,setdetail]=useState([]);
 
//   useEffect(() => {

//     const Detail=async()=>{
//   try {
//     const{data:detail}=await ProductApi.get(id);
// setdetail(detail)
//   } catch (error) {
//     console.log(error);
//   }
//     }
//     Detail();
//     return () => {
    
//     };
//   }, [])

  // const onChangecate= async()=>{
  //            const {data:products}=await ProductApi.getAll();
  //            const newProduct=products.filter(product=>product.categoryId===id)
  //            setTodos(newProduct)

  // }
  ///category
  const [cate, setcate] = useState([]);
  useEffect(() => {
    const listcategory = async () => {
      try {
        const { data: categorys } = await CategoryApi.getAll();
        console.log(categorys)
       
        setcate(categorys);
        
       // localStorage.setItem('category',JSON.stringify(categorys));
      } catch (error) {
        console.log(error)
      };
    }
    listcategory();
    return()=>{
      setcate(null);
    }
  }, [])
  const onHandleAddcate = async (category, userId) => {
    try {
      await CategoryApi.add(category, userId);
      setcate([
        ...cate,
        category
      ])
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleRemovecate = async (id,userId) => {
    try {
       await CategoryApi.remove(id,userId);
      const newcategory = cate.filter(x => x._id != id)
      setcate(newcategory);
    } catch (error) {
      console.log(error)
    }
  }
 const onHandleEditCate=async(id,userId,category)=>{
try {
  await CategoryApi.update(id,userId,category);
  const {data:categorys}=CategoryApi.getAll();
  setcate(categorys);

} catch (error) {
  console.log(error)
}
 }
 const [user,setuser]=useState([]);
 useEffect(()=>{
const listuser=async()=>{
try {
  const {data:user}=await UserApi.getAll();
setuser(user);
} catch (error) {
  console.log(error);
}
}
listuser();
 },[])
//  const [pagination,setpagination]=useState({
//    _page:1,
//    _limit:10,
//    _totalRows:11
//  });
const handlePageChange=(newPage)=>{
console.log("huy",newPage);
}
  return (
    <div className="container">
      <CartProvider/>
      <Routers onAdd={onHandleAdd}
        todos={todos}
        listcate={cate}
        onEditCate ={onHandleEditCate}
        onRemove={onHandleRemove}
        onEdit={onHandleEdit}
      //  product={listdetail}
        onAddCate={onHandleAddcate}
        onRemovecate={onHandleRemovecate}
     
        
        // pagination={pagination}
        onPageChange={handlePageChange}
        
        />

    </div>
  );
  
}

export default App;
