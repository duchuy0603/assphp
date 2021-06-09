import React, { useState } from 'react'
import WebsiteLayout from '../../layouts/website'
import { API } from '../../config'
import { useHistory } from 'react-router'
import { useForm } from 'react-hook-form'
import { authenticate ,signin} from '../../auth'
const Signin = () => {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, seterror] = useState("");
    const [loading, setloadng] = useState(false);
    const signin = (user) => {
        return fetch(`${API}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(respone => respone.json())
            .catch(error => console.log(error))
    }




    const onSubmit = (data, e) => {
        setloadng(true);
        signin(data)
            .then(dataUser => {
                if (dataUser.error) {
                    seterror(dataUser.error);
                    setloadng(false);
                } else {
                    authenticate(dataUser,()=>{
                        history.push("/");
                    })
                }
            })

    }
    const ShowError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>

            {error}
        </div>

    }
    const ShowLoading=()=>{
return loading &&<div className="alert alert-info">
    <h2>...loading</h2>
</div>
    }
    const SigninForm = () => {

        return (

            <form onSubmit={handleSubmit(onSubmit)} className="dk pd-5">
                <h1 className="px-6" >Đăng Nhập</h1>

                <div className="mb-3">
                    <label className="form-label" htmlFor="email" >Email</label>
                    <input type="text" className="form-control"
                        name="" id="email"
                        aria-describedby="helpId" placeholder=""
                        {...register('email')}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password" >password</label>
                    <input type="password" className="form-control"
                        name="" id="password"
                        aria-describedby="helpId" placeholder=""
                        {...register('password')}
                    />

                </div>

                <button className="btn btn-primary">Signin</button>
            </form>

        )
    }
    return (
        <div>
            {ShowError()}
            {ShowLoading()}
            {SigninForm()}


        </div>
    )
}

export default Signin;
