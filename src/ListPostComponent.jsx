// Your parent component or route file
import React, { useState, useEffect } from "react";
import PostList from "./PostList"; // Import the PostList component

function loadPosts() {
  let posts = [
    {
      id: 12,
      title: "Edit Post",
      content: "Edit Content post",
    },
    {
      id: 18,
      title: "New Post 9",
      content: "test new Post 9",
    },
  ];
  return posts;
}

async function getPosts() {
  let response = await fetch("https://localhost:7265/api/posts", {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqLmdvbWV6QGVtYWlsLmNvbSIsImVtYWlsIjoiai5nb21lekBlbWFpbC5jb20iLCJqdGkiOiI2YTcyNGEyNC05YzhlLTRhMjMtYTJhMC1jN2VkYjUzZjYyN2QiLCJuYmYiOjE2OTM2MjYxMzgsImV4cCI6MTY5MzYyNjczOCwiaWF0IjoxNjkzNjI2MTM4LCJpc3MiOiJJc3N1ZXIiLCJhdWQiOiJBdWRpZW5jZSJ9.-OjT_2YblL6VIRR5QCUCHvlpR_-NoNVFvam3ZAdk0O-bzRWnz72bZx1zPoc5IttF2__5LB0ibY_RJqCHADl2ug",
    },
  });

  return await response.json();
}

function ListPostComponent() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      console.log(data);
    });
  }, posts);
  return (
    <div>
      {/* Use the PostList component and pass the posts data */}
      <PostList posts={posts} />
    </div>
  );
}

export default ListPostComponent;
