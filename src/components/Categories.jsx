import { NavLink } from "react-router-dom";
import styled from "styled-components";
function Categories() {
  return (
    <Wrapper>
      <NavLink to="/category/news">
        <Category>Aktualności</Category>
      </NavLink>
      <NavLink to="/category/news">
        <Category>Rozrywka</Category>
      </NavLink>
      <NavLink to="/category/news">
        <Category>Ciekawostki</Category>
      </NavLink>
      <NavLink to="/category/news">
        <Category>Technologie</Category>
      </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 1rem;
`;

const Category = styled.div`
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

export default Categories;
