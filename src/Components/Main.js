import React from "react";
import styled from "styled-components";

const Greeting = styled.div`
  margin: auto auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  text-align: left;
  margin-top: 50px;
  height: 100vh;
  background: linear-gradient(rgba(75, 0, 130, 0.98), rgba(75, 0, 130, 0.95)),
    /* bottom, image */
      url("https://images.unsplash.com/photo-1545968340-848cddd981ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80");
  p {
    font-family: "Poppins", sans-serif;
    color: #0099ff;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    color: #97d8b2;
    span {
      color: #0099ff;
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
    color: #0099ff;
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
    background: #0099ff;
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
