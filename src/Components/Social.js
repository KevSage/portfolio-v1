import React from "react";
import styled from "styled-components";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

const Social_Menu = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  margin-top: 400px;
  color: #97d8b2;
  font-size: 2.5rem;
  ul {
    list-style-type: none;
    li {
      padding: 5px 0;
      margin: 10px 0;
    }
    li:hover {
      color: royalblue;
      border-bottom: 2px solid royalblue;
      transition-timing-function: ease-in;
      cursor: pointer;
      height: fit-content;
    }
  }
`;
const Social = () => {
  return (
    <Social_Menu>
      <ul>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaYoutube />
        </li>
      </ul>
    </Social_Menu>
  );
};
export default Social;
