import axios from "axios";

const url = `https://jsonplaceholder.typicode.com/posts/`;

const getPost = async (value) => {
  try {
    let response = await axios.get(`${url}${value}`);
    console.log(response.data);
  } catch (error) {
    console.log(error.response.status);
  }
};
getPost(2);

const newPost = {
  title: "Novo post",
  body: "Novo texto do post",
};

const putPost = async (value) => {
  let response = await axios.put(`${url}${value}`, newPost);
  console.log(response.data);
};
//putPost(2);

const newPostTwo = {
  title: "Titulo editado",
  body: "Texto editado",
};

const editPost = async (value) => {
  try {
    let response = await axios.patch(`${url}${value}`, newPostTwo);
    console.log(response);
  } catch (error) {
    console.log(error.response.status);
  }
};

//editPost(1);

const deletePost = async (value) => {
  try {
    let response = await axios.delete(`${url}${value}`);
    console.log(response);
  } catch (error) {
    console.log(error.response.status);
  }
};

//deletePost(3);
