import React from "react";
import styled from "styled-components";
import Pic from "./Portfoliopic.jpeg";
const Bio = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  color: #0099ff;
  font-size: 1.2rem;
  width: 30%;
  margin-right: 100px;
  display: block;
  flex-direction: row;
  justify-content: flex-end;
  text-align: left;
`;
const About = () => {
  return (
    <div className="hero">
      <Bio>
        <h1>About Me</h1>
        <p>
          Originally from Tampa, FL. Attended Florida State University before
          relocating to Dalian China. Worked as an English Teacher, Saxophonist
          and Clinician.
        </p>
      </Bio>
    </div>
  );
};
export default About;
