import { useState, useEffect } from "react";
import useContentful from "./useContentful";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const { getPosts } = useContentful();

  useEffect(() => {
    getPosts().then((response) => setPosts(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {posts.map((post) => {
        return (
          <Post key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <img src={post.image} alt={post.title} />
            </Link>
            <h2>{post.title}</h2>
            <p>{post.shortDescription}</p>
            <Link to={`/posts/${post.id}`}>
              <Button>Dowiedz się więcej</Button>
            </Link>
          </Post>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Post = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem auto;
  text-align: center;
  width: 600px;
  max-width: 100%;

  h2 {
    margin: 0.2rem;
  }

  p {
    margin-bottom: 0.8rem;
  }

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 1rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: #a00c85;
  font-weight: 700;
  color: white;
  cursor: pointer;
  transform: scale(0.9);

  &:hover {
    opacity: 0.9;
    transition: ease-in-out 0.25s;
  }
`;

export default Posts;
