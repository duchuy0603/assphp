import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import CategoryApi from '../../../api/CategoryApi'
function AddCategory({ onAddCate }) {
    let userId = localStorage.getItem("id")

    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const addcate = new FormData();
        addcate.append("name", data.name);
        onAddCate(addcate, userId);


        history.push('/admin/listcate')

    }

    return (
        <div>
            <h2>Add category</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} id="form" >
                <label>Name</label>
                <input
                    type="text"
                    id="category-name"
                    {...register('name', { required: true })}
                    className={`form-control ${errors.name ? "border border-danger" : ""}`}

                />
                {errors.name && <span className="text-warning">bạn chưa nhập tên</span>}

                <button type="submit" className="btn btn-primary"  >Add</button>
            </form>
        </div>
    )
}

export default AddCategory;
