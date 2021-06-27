import { axiosClient } from './axiosClient';

const CategoryApi = {
    getAll() {
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add(categories, userId) {
        const url = `/categories/${userId}`;
        return axiosClient.post(url, categories);
    },
    remove(id,userId) {
        const url = `/categories/${id}/${userId}`;
        return axiosClient.delete(url);
    },
    update(id,userId, category) {
        const url = `/categories/${id}/${userId}`;
        return axiosClient.put(url, category);
    }


}
// add(categories,userId) {
//     const url = `/categories/${userId}`;
//     return axiosClient.post(url, categories);
// },
// remove(id,userId) {
//     const url = `/categories/${id}/${userId}`;
//     return axiosClient.delete(url);
// },
// update(id, data,userId) {
//     const url = `/categories/${id}/${userId}`;
//     return axiosClient.put(url, data);
// }
export default CategoryApi;