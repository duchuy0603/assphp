import './App.css';

import { useState, useEffect } from "react";
import Routers from "./Routers"
import Header from './components/Header';
import ProductApi from "./api/ProductApi"
import CategoryApi from './api/CategoryApi';
import { uuidv4 as v4 } from "uuid"
import ListCate from './pages/product/ListCate';


function App() {
  ///product
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    // didmount
    const listtodo = async () => {
      try {
        const { data: products } = await ProductApi.getAll();
        setTodos(products);
        localStorage.setItem('products', JSON.stringify(products));
      } catch (error) {
        console.log(error)
      };
    }
    listtodo();
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
  return (
    <div className="container">
      <Routers onAdd={onHandleAdd}
        todos={todos}
        onRemove={onHandleRemove}
        onEdit={onHandleEdit}
        listcate={cate}
        onAddCate={onHandleAddcate}
        onRemovecate={onHandleRemovecate}
        onEditCate ={onHandleEditCate}
        />
    </div>
  );
}

export default App;
