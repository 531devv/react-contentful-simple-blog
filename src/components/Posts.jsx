import { useState, useEffect, useId, useContext } from "react";
import useContentful from "../hooks/useContentful";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function Posts() {
  const [posts, setPosts] = useState([]);
  const { getPosts } = useContentful();
  const id = useId();
  const { theme, isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    getPosts().then((response) => setPosts(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {posts.map((post) => {
        return (
          <Post
            theme={isDarkMode ? theme.darkMode : theme.lightMode}
            key={`${id}+${post.title}`}
          >
            <Thumbnail
              to={`${process.env.REACT_APP_PRODUCTION_DIR}/posts/${post.slug}`}
            >
              <Image
                theme={isDarkMode ? theme.darkMode : theme.lightMode}
                src={post.image}
                alt={post.title}
              />
              <Title>{post.title}</Title>
            </Thumbnail>
            <CategoryWrapper
              theme={isDarkMode ? theme.darkMode : theme.lightMode}
            >
              {post.categories.map((category, index) => {
                return (
                  <Category
                    key={`${id}+${index}`}
                    to={`${process.env.REACT_APP_PRODUCTION_DIR}/category/${category.categoryName}`}
                  >
                    {category.categoryTitle}
                  </Category>
                );
              })}
            </CategoryWrapper>
            <p>{post.shortDescription}</p>
            <Link
              to={`${process.env.REACT_APP_PRODUCTION_DIR}/posts/${post.slug}`}
            >
              <Button theme={isDarkMode ? theme.darkMode : theme.lightMode}>
                Dowiedz się więcej
              </Button>
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
  margin: 6rem auto;
  text-align: center;
  width: 800px;
  max-width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 1rem;
  padding: 3rem;
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

const Thumbnail = styled(Link)`
  position: relative;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
  color: white;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
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

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 0.4rem;
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;

  a {
    background-color: ${({ theme }) => theme.buttonColor};
    color: ${({ theme }) => theme.buttonFontColor};
    &:hover {
      background-color: ${({ theme }) => theme.buttonHoverColor};
      color: ${({ theme }) => theme.buttonHoverFontColor};
    }

    &.active {
      background-color: ${({ theme }) => theme.buttonHoverColor};
      color: ${({ theme }) => theme.buttonHoverFontColor};
    }
  }
`;

const Category = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: #a00c85;
  color: white;
  font-size: 0.9rem;
  margin-right: 0.2rem;
  transform: scale(0.8);
`;

const Image = styled.img`
  box-shadow: ${({ theme }) => theme.postBoxShadow};
`;

export default Posts;
