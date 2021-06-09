import { axiosClient } from './axiosClient';

const ProductApi = {
    getAll() {
        const url = `/products`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    // add(product, token) {
    //     const useradd = sessionStorage.getItem('user');
    //     var auth = JSON.parse(useradd)
    //     var token = auth.token;
    //     var userId = auth.user._id;

    //     const url = `/products/${userId}`;
    //     return axiosClient.post(url, product, {
    //         headers: { 'Authorization': 'Bearer ' + token }
    //     });
    // },
    add(product,id) {
    

        const url = `/products/${id}`;
        return axiosClient.post(url, product);
    },
    // remove(id, token) {
    //     const userUpdate = sessionStorage.getItem('user');
    //     var auth = JSON.parse(userUpdate)
    //     var token = auth.token;
    //     var userId = auth.user._id;

    //     const url = `/products/${id}/${userId}`;
    //     return axiosClient.delete(url, {
    //         headers: { 'Authorization': 'Bearer ' + token }
    //     });
    // },
    remove(id,userId) {
        const url = `/products/${id}/${userId}`;
        return axiosClient.delete(url);
    },
    // update(id, product, token) {
    //     const userUpdate = sessionStorage.getItem('user');
    //     var auth = JSON.parse(userUpdate)
    //     var token = auth.token;
    //     var userId = auth.user._id;

    //     const url = `/products/${id}/${userId}`;
    //     return axiosClient.put(url, product, {
    //         headers: { 'Authorization': 'Bearer ' + token }
    //     });
    // }
    update(id,userId ,product) {   
        const url = `/products/${id}/${userId }`;
        return axiosClient.put(url, product);
    }
}
export default ProductApi;