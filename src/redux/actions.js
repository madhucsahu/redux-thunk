import axios from "axios";
import * as types from "./actionType";

 const getUsers = (users) =>({
    type: types.GET_USERS,
    payload:users,
});

 const userDeleted = () =>({
    type:types.DELETE_USERS,
});

const userAdded = () =>({
    type:types.ADD_USER,
});

const userUpdated = () =>({
    type:types.UPDATE_USER,
});

const getUser = (user) =>({
    type:types.GET_SINGLE_USER,
    payload:user,
});



export const loadUsers = () =>{
    return function(dispatch){
        axios
        .get(`${process.env.REACT_APP_API}`)
        .then((resp)=>{
            console.log("resp",resp);
            dispatch(getUsers(resp.data));
        })
        .catch((error)=> console.log(error));
    };
};

export const deleteUsers = (id) =>{
    return function(dispatch){
        axios
        .delete(`${process.env.REACT_APP_API}/${id}`)
        .then((resp)=>{
            console.log("resp",resp);
            dispatch(userDeleted());
            dispatch(loadUsers());
        })
        .catch((error)=> console.log(error));
    };
};

export const updateUser= (user,id) =>{
    return function(dispatch){
        axios
        .put(`${process.env.REACT_APP_API}/${id}`,user)
        .then((resp)=>{
            console.log("resp",resp);
            dispatch(userUpdated());
           
        })
        .catch((error)=> console.log(error));
    };
};

export const addUsers = (user) =>{
    return function(dispatch){
        axios
        .post(`${process.env.REACT_APP_API}`,user)
        .then((resp)=>{
            console.log("resp",resp);
            dispatch(userDeleted());
            dispatch(loadUsers());
        })
        .catch((error)=> console.log(error));
    };
};

export const getSingleUser= (id) =>{
    return function(dispatch){
        axios
        .get(`${process.env.REACT_APP_API}/${id}`)
        .then((resp)=>{
            console.log("resp",resp);
            dispatch(getUser(resp.data));
            
        })
        .catch((error)=> console.log(error));
    };
};