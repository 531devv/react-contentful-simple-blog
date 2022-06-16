import { useParams } from "react-router-dom";
import styled from "styled-components";
import useContentful from "./useContentful";
import { useState, useEffect, useContext } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ThemeContext from "../Context/ThemeContext";

function Post() {
  const [post, setPost] = useState([]);
  const { getPost } = useContentful();
  let params = useParams();
  const { theme, isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    getPost(params.id).then((response) => setPost(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return post.map((item) => {
    return (
      <Wrapper
        key={item.slug}
        theme={isDarkMode ? theme.darkMode : theme.lightMode}
      >
        <img src={item.image} alt={item.title} />
        <h1>{item.title}</h1>
        {documentToReactComponents(item.text)}
      </Wrapper>
    );
  });
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.fontColor};
  img {
    width: 100%;
    max-width: 800px;
    object-fit: contain;
  }

  h1 {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: auto;
    padding: 1rem;
  }

  p {
    padding-bottom: 1rem;
  }
`;

export default Post;
