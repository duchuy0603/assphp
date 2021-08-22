import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Editcategory = ({ onEditCate, listcate }) => {
    let history = useHistory();
    let userId = localStorage.getItem("id")
    let { id } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const add = new FormData();
        add.append('name', data.name);
        onEditCate(id, userId, add);
      
        history.push("/admin/listcate");
       
    }
    const { 0: categorys } = listcate.filter(x => x._id === id);
    return (
        <div>
            <h2>updateCatgory</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group">
                    <label for="">name</label>

                    <input type="text"
                        className={`form-control ${errors.name ? "boder border-danger" : ""}`}
                        placeholder={categorys?.name} id="" aria-describedby="helpId"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <span className="text-warning">bạn chưa nhập tên</span>}
                    <button type="submit" className="btn btn-primary">edit</button>
                </div>
            </form>
        </div>
    )
}

export default Editcategory;
