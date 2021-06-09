import { API } from "../config"
import UserApi from '../api/UserApi'
 export const signin = (user) => {
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

export const signup = (user) => {
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(respone => respone.json())
        .catch(error => console.log(error))
}

        export const authenticate=(data,next)=>{
            if(typeof window!== 'undefined'){
                localStorage.setItem("id", data.user._id)
                localStorage.setItem("role", data.user.role)
                localStorage.setItem("token", data.token)
                // sessionStorage.setItem('role',JSON.stringify(data.id.role))
                // sessionStorage.setItem('name',JSON.stringify(data.id.name))
                next();
            }
        }
    

       