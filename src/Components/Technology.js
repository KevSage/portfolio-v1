import React from "react";
import styled from "styled-components";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiCsswizardry,
  SiReact,
  SiBootstrap,
  SiSass,
  SiJquery,
  SiRedux,
  SiRuby,
  SiRails,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiJest,
  SiReactrouter,
} from "react-icons/si";

const Tech = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  display: flex;
  width: 70%;
  margin: 100px auto;
  color: #0099ff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 50px;
    list-style-type: none;
    flex-direction: row;
    margin: 20px;

    li {
      padding: 20px;
      color: #0099ff;
      div {
        font-size: 20px;
      }
    }
  }
`;
const Frontend = styled.div`
  width: 50%;
  z-index: 1;
`;
const Backend = styled.div`
  width: 50%;
  z-index: 1;
`;
const Technology = () => {
  return (
    <Tech>
      <Frontend>
        <h3>Frontend</h3>
        <ul>
          <li>
            <AiOutlineHtml5 />
            <div>HTML5</div>
          </li>
          <li>
            <SiCsswizardry />
            <div>CSS</div>
          </li>
          <li>
            <SiJavascript />
            <div>JavaScript</div>
          </li>
          <li>
            <SiReact />
            <div>React.JS</div>
          </li>
          <li>
            <SiBootstrap />
            <div>Bootstrap</div>
          </li>
          <li>
            <SiJest />
            <div>Jest</div>
          </li>
          <li>
            <SiJquery />
            <div>JQuery</div>
          </li>
          <li>
            <SiRedux />
            <div>Redux</div>
          </li>
          <li>
            <SiReactrouter />
            <div>React Router</div>
          </li>
        </ul>
      </Frontend>
      <Backend>
        {" "}
        <h3>Backend</h3>
        <ul>
          <li>
            <SiRuby />
            <div>Ruby</div>
          </li>
          <li>
            <SiRails />
            <div>Rails</div>
          </li>
          <li>
            <SiMysql />
            <div>MySQL</div>
          </li>
          <li>
            <SiPostgresql />
            <div>Postgresql</div>
          </li>
          <li>
            <SiGithub />
            <div>Github</div>
          </li>
        </ul>
      </Backend>
    </Tech>
  );
};
export default Technology;
