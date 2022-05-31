import { useState, useEffect } from "react";
import styled from "styled-components";
import useContentful from "./useContentful";
import { Link, useParams } from "react-router-dom";

function Category() {
  const [posts, setPosts] = useState([]);
  let { slug } = useParams();
  const { getPosts } = useContentful();

  return <div>Category</div>;
}

export default Category;
