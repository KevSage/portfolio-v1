import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  background: indigo;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  color: #97d8b2;
  padding: 20px;
  z-index: 1000;
  height: 90px;
  position: fixed;
  top: 0%;
`;
const Logo = styled.div`
  display: flex;
  position: fixed;
  color: royalblue;
  justify-content: flex-start;
  width: 50%;
  font-size: 1.2rem;
  font-family: "Audiowide", cursive;
  top: 0px;
  h4 {
    border: 5px solid ;
    border-radius: 100%;
    padding 10px;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  position: fixed;
`;
const Menu_Items = styled.div`
  list-style-type: none;
  display: flex;

  li {
    padding: 20px 10px;
    font-size: 1.1rem;
    font-family: "Poppins", sans-serif;
  }
  li:hover {
    color: royalblue;
    border-bottom: 2px solid royalblue;
    transition-timing-function: ease-in;
    cursor: pointer;
    height: fit-content;
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <Logo classname="logo">
        <h4>KS</h4>
      </Logo>
      <Menu>
        <Menu_Items>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Resume</li>
        </Menu_Items>
      </Menu>
    </Nav>
  );
};
export default Navbar;
