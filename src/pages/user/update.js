import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
function Update(props) {
    const {id}=useParams();
    const {register,handleSubmit,formState:{error}}=useForm();
    const add=new FormData();
    return (
        <div>
  <form onSubmit={handleSubmit(onsubmit)}> 
  <div classname="form-control">
         <label for="">Email</label>
         <input type="email" 
         className="form-control" 
         name="" id=""
         {...register('email',{required:true})}
          placeholder=""/>
             <label for="">Email</label>
         <input type="password" 
         className="form-control" 
         name="" id=""
         {...register('password',{required:true})}
          placeholder=""/>
       </div>
  </form>
        </div>
    );
}

export default Update;