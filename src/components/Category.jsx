import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import useContentful from "../hooks/useContentful";
import { Link, useParams } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function Category() {
  const [posts, setPosts] = useState([]);
  let { slug } = useParams();
  const { getCategoryPosts } = useContentful();
  const { theme, isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    getCategoryPosts(slug).then((response) => setPosts(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const categoryPosts = posts.map((post, index) => {
    return (
      <Post
        theme={isDarkMode ? theme.darkMode : theme.lightMode}
        key={post.slug + index}
      >
        <Link to={`/posts/${post.slug}`}>
          <Image
            theme={isDarkMode ? theme.darkMode : theme.lightMode}
            src={post.image}
            alt={post.title}
          />
        </Link>
        <h2>{post.title}</h2>
        <p>{post.shortDescription}</p>
        <Link to={`/posts/${post.slug}`}>
          <Button theme={isDarkMode ? theme.darkMode : theme.lightMode}>
            Dowiedz się więcej
          </Button>
        </Link>
      </Post>
    );
  });

  return (
    <Wrapper>
      {categoryPosts.length > 0 ? categoryPosts : <Text>Brak postów</Text>}
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
  text-align: center;
  width: 800px;
  max-width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 1rem;
  padding: 3rem;
  margin: 6rem auto;

  h2 {
    margin-top: 1.2rem;
    margin-bottom: 0.5rem;
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
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.buttonFontColor};
  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverColor};
    color: ${({ theme }) => theme.buttonHoverFontColor};
  }
`;

const Text = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  box-shadow: ${({ theme }) => theme.postBoxShadow};
`;

export default Category;
