import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

async function getComments(id) {
  let response = await fetch(
    `https://localhost:7265/api/posts/${id}/comments`,
    {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqLmdvbWV6QGVtYWlsLmNvbSIsImVtYWlsIjoiai5nb21lekBlbWFpbC5jb20iLCJqdGkiOiI2YTcyNGEyNC05YzhlLTRhMjMtYTJhMC1jN2VkYjUzZjYyN2QiLCJuYmYiOjE2OTM2MjYxMzgsImV4cCI6MTY5MzYyNjczOCwiaWF0IjoxNjkzNjI2MTM4LCJpc3MiOiJJc3N1ZXIiLCJhdWQiOiJBdWRpZW5jZSJ9.-OjT_2YblL6VIRR5QCUCHvlpR_-NoNVFvam3ZAdk0O-bzRWnz72bZx1zPoc5IttF2__5LB0ibY_RJqCHADl2ug",
      },
    }
  );

  return await response.json();
}

function Comments() {
  const { id } = useParams();
  const [comments, setComment] = useState([]);
  useEffect(() => {
    getComments(id).then((data) => {
      setComment(data);
      console.log(data);
    });
  }, []);
  return (
    <div>
      <h3>Comments: </h3>
      <ul>
        {comments.map((comment) => (
          <li>{comment.comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
