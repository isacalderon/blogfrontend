// Your parent component or route file
import React, { useState, useEffect } from "react";

async function getPostbyId(id) {
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

function ContentPostComponent(id) {
  const [postContent, setPostContent] = useState([]);
  useEffect(() => {
    getPostbyId(id).then((data) => {
      setPostContent(data);
      console.log(data);
    });
  }, postContent);
  return (
    <div>
      {/* Use the PostList component and pass the posts data */}
      <div>
        <h1>{postContent.title}</h1>
        <p>{postContent.content}</p>
      </div>
    </div>
  );
}

export default ContentPostComponent;
