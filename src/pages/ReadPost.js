import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

async function getPostsbyid(id) {
  let response = await fetch("https://localhost:7265/api/posts/id/" + id, {
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

const ReadPost = () => {
  const { id } = useParams();
  const [postContent, setPostContent] = useState([]);
  useEffect(() => {
    getPostsbyid(id).then((data) => {
      setPostContent(data);
      console.log(data);
    });
  }, []);
  return (
    <div>
      <h1>{postContent.title}</h1>
      <p>{postContent.content}</p>
      <div>
        <br />
        <Comments />
      </div>
    </div>
  );
};

export default ReadPost;
