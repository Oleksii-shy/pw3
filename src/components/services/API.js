import axios from "axios";

let axiosInstanceUsers = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});
let axiosInstancePosts = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});
let axiosInstanceComments = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
});

let getUsers = () => axiosInstanceUsers();
let getPosts = () => axiosInstancePosts();
let getComments = () => axiosInstanceComments();

export {getUsers, getPosts, getComments}

