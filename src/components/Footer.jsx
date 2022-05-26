import styled from "styled-components";
import { RiHeartFill } from "react-icons/ri";

function Footer() {
  return (
    <PageFooter>
      <p>
        Made with <RiHeartFill /> by{" "}
        <a href="https://github.com/531devv">Marek Klatt</a>
      </p>
    </PageFooter>
  );
}

const PageFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  font-size: 0.8rem;
  color: #323232;
  border-top: 1px solid #e3e3e3;

  svg {
    color: #a00c85;
    position: relative;
    bottom: -1.5px;
  }
`;

export default Footer;
