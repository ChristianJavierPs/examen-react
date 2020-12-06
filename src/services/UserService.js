import axios from 'axios';

const API = 'http://localhost:5000/users';

const getUsers = () =>{
    return axios.get(API);
}

const getUserById = (id) =>{
    return axios.get(`${API}/${id}`);
}

const updateUser = (user) =>{
    return axios.put(`${API}/${user.id}`,user);
} 

const deleteUser = (id) =>{
    return axios.delete(`${API}/${id}`);
}


const createUser = (user) =>{
    return axios.post(API,{...user, id: Date.now()})
}

export default {
    getUsers,
    getUserById,
    deleteUser,
    createUser,
    updateUser
}
