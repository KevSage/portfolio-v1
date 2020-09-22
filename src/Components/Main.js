import React from "react";
import styled from "styled-components";

const Greeting = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  margin: auto auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  text-align: left;
  margin-top: 50px;
  height: 100vh;
  background-color: indigo;

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
  margin: 10px auto;
  font-size: 1.1rem;
  width: 50%;
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
      <Intro>
        <p>Hi, my name is</p>
        <h2>Kevin Sage. Call me Kev</h2>
        <h2>
          I specialize in <span>React</span> |{" "}
          <span>Ruby on Rails Development</span>
        </h2>
      </Intro>
      <Intro>
        Lifelong <span>Jazz Musician. </span>
        <span>Educator. </span>
        <span>World Traveller. </span>
        <span>Language Enthusiast. </span>
        <p>
          The study of music and my extensive travel abroad has provided an
          astute understanding of the functionality and application of Language.
          Syntax, pattern recognition and process, skills that I've acquired
          from life experience translates exceptionally well to writing code.
        </p>
        <Button>Holla at me!</Button>
      </Intro>
      {/* <div class="hero" id="tsparticles">
        <div className="w wave"></div>
        <div className="w wave2"></div>
        <div className="w wave3"></div>
        <div className="w wave4"></div>
      </div> */}
    </Greeting>
  );
};
export default Main;
