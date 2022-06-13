import { useState, useEffect } from "react";
import styled from "styled-components";
import useContentful from "./useContentful";
import { Link, useParams } from "react-router-dom";

function Category() {
  const [posts, setPosts] = useState([]);
  let { slug } = useParams();
  const { getCategoryPosts } = useContentful();

  useEffect(() => {
    getCategoryPosts(slug).then((response) => setPosts(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <Wrapper>
      {posts.map((post) => {
        return (
          <Post key={post.slug}>
            <Link to={`/posts/${post.slug}`}>
              <img src={post.image} alt={post.title} />
            </Link>
            <h2>{post.title}</h2>
            <p>{post.shortDescription}</p>
            <Link to={`/posts/${post.slug}`}>
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
  &:hover {
    background-color: black;
  }
`;

export default Category;
