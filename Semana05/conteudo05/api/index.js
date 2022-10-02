//GET -- PEGA
//POST -- ENVIA
//PUT -- EDITAR
//PATCH -- EDITAR
//DELETE -- APAGAR

//FAKE API

import axios from "axios";

// const getPosts = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts/101"
//     );
//     console.log(response.data);
//     return response;
//   } catch (error) {
//     console.log(error.response.status == 404 ? "Pagina X" : "Pagina Y");
//   }
// };

// getPosts();

// const setPosts = async (info) => {
//   try {
//     const response = await axios.post(
//       "https://jsonplaceholder.typicode.com/posts",
//       info
//     );
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error.response.status == 404 ? "Pagina X" : "Pagina Y");
//   }
// };

// const data = {
//   title: "Meu titulo",
//   body: "Meu texto",
//   userId: 18,
// };
// setPosts(data);

// const putPosts = async (info, value) => {
//   try {
//     const response = await axios.put(
//       `https://jsonplaceholder.typicode.com/posts/${value}`,
//       info
//     );
//     console.log(response);
//     //return response;
//   } catch (error) {
//     console.log(error.response.status);
//   }
// };

// const data = {
//   title: "Meu titulo",

//   userId: 18,
// };
// putPosts(data, 1);

// const patchPosts = async (info, value) => {
//   try {
//     const response = await axios.patch(
//       `https://jsonplaceholder.typicode.com/posts/${value}`,
//       info
//     );
//     console.log(response);
//     //return response;
//   } catch (error) {
//     console.log(error.response.status);
//   }
// };

// const data = {
//   title: "Meu titulo",

//   userId: 18,
// };
// patchPosts(data, 1);

const deletePosts = async (value) => {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${value}`
    );
    console.log(response.data);
    //return response;
  } catch (error) {
    console.log(error.response.status);
  }
};

const data = {
  title: "Meu titulo",

  userId: 18,
};
deletePosts(1);
