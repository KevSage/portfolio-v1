import React from "react";
import styled from "styled-components";

const Greeting = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  margin: auto auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  align-items: flex-start;
  text-align: left;
  margin-top: 50px;

  p {
    font-family: "Audiowide", cursive;
    color: royalblue;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    color: #97d8b2;
    span {
      color: royalblue;
    }
  }
`;
const Intro = styled.div`
  font-family: "Poppins", sans-serif;
  color: #97d8b2;
  margin: 20px 0;
  font-size: 1.1rem;
  span {
    color: royalblue;
  }
  p {
    font-family: "Poppins", sans-serif;
    color: #97d8b2;
  }
`;
const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid royalblue;
  color: #97d8b2;
  padding: 1em 1em;
  &:hover {
    background: royalblue;
    color: #97d8b2;
    cursor: pointer;
  }
`;

const Main = () => {
  return (
    <Greeting>
      <p>Hi, my name is</p>
      <h2>Kevin Sage. Call me Kev</h2>
      <h2>
        I specialize in <span>React</span> |{" "}
        <span>Ruby on Rails Development</span>
      </h2>
      <Intro>
        Lifelong <span>Jazz Musician. </span>
        <span>World Traveller. </span>
        <span>Language Enthusiast. </span>
        <p>
          The study of music and my extensive travel abroad has provided an
          astute understanding of the functionality and application of Language.
          Syntax, pattern recognition and process, skills that I've acquired
          from life experience translates exceptionally well to writing code.
        </p>
      </Intro>
      <Button>Holla at me!</Button>
    </Greeting>
  );
};
export default Main;
