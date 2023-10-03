import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/getposts")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="posts_container">
      {posts.map((post, index) => (
        <Link to={`/post/${post._id}`} key={index} className="post">
          <img src={`http://localhost:3000/Images/${post.file}`} alt="" />
          <div className="post_text">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
