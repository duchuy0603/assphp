import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import ProductApi from '../../../api/ProductApi'
function EditProduct({ todos, onEdit ,listcate}) {
    let { id } = useParams();
    const [product, setProduct] = useState(

    )
    const { 0: products } = todos.filter(x => x._id === id);
    // useEffect(() => {
    //     const product = async (id) => {
    //         try {
    //             const { data } = await ProductApi.get(id);
    //             setProduct(data);

    //         } catch (error) {
    //             console.log(error)
    //         };
    //     }
    //     product();
    // }, [])

    let history = useHistory();
    let userId=localStorage.getItem('id')

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const add = new FormData();
        add.append("name", data.name)
        add.append("price", data.price);
        add.append("photo", data.photo[0]);
        add.append("description", data.description);
        add.append("quantity", data.quantity);
        add.append("status", data.status);
        add.append("categoryId", data.categoryId);
        add.append("shipping", true);

        onEdit(id,userId, add);


        history.push('/admin/listpro')

    }

    return (
        <div>
            <h2>EditProduct</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} id="form" >
                <label>Name</label>
                <input
                    type="text"
                   
                    placeholder={products?.name}
                    id="product-name"

                    {...register('name', { required: true})}
                    className={`form-control ${errors.name ? "border border-danger" : ""}`}
                //   value={products.name}
                />
                {errors.name && <span className="text-warning">bạn chưa nhập tên</span>}
                <label>Price</label>

                <input
                    type="number"
                    placeholder={products?.price}
                    className="form-control"
                    
                    {...register('price', { required: true ,min:1,max:999999999999999999})}

                    className={`form-control ${errors.price ? "border border-danger" : ""}`}
                    id="product-price"
                />
                {errors.price && <span className="text-warning">giá không hợp lệ</span>}
                <label>image</label>
                <input
                    type="file"
                    className="form-control"
              
                    {...register('photo', { required: true })}
                   
                    className={`form-control ${errors?.photo ? "border border-danger" : ""}`}
                    id="product-image"
                />
                  {/* <img src={ products.photo} alt="" height="120px" width="110px" /> */}
                {errors.photo && <span className="text-warning">chưa có ảnh</span>}

                <label>description</label>
                <textarea

                    className="form-control"
                    placeholder={products?.description}
                    {...register('description', { required: true })}

                    className={`form-control ${errors.description ? "border border-danger" : ""}`}
                    id="product-description"
                />
                {errors.description && <span className="text-warning"></span>}
                <label>quantity</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder={products?.quantity}
                    {...register('quantity', { required: true ,min:1,max:99999999})}

                    className={`form-control ${errors.quantity ? "border border-danger" : ""}`}
                    id="product-quantity"

                />
                {errors.quantity && <span className="text-warning">số lượng không hợp lệ</span>}
                <label>Category</label>
                <select className="form-control"
                    value={products?.categoryId}
                    id="product-category"
                    {...register('categoryId', { required: true })}>
                   {listcate.map((x,index)=>(
                          <option key={index} value={x._id}>{x.name}</option>
                     ))}
                </select>

                <label>status</label>
                <select className="form-control" name="status"

                    id="product-status"
                  
                    value={products?.status}
                    {...register('status', { required: true })} >
                    <option value="còn hàng">Còn hàng</option>
                    <option value="hết hàng">Hết hàng</option>
                </select>
                {/* <label>categoryId</label>
              <select className="form-control" name="status"    {...register('categoryId',{required:true})} id="">
                  <option  value="còn hàng">Còn hàng</option>
                  <option value="hết hàng">Hết hàng</option>
                </select> */}
                <br />
                <button type="submit" className="btn btn-primary"  >Add</button>
            </form>
        </div>
    )
}

export default EditProduct;
