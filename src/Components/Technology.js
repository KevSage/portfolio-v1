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
  SiPostman,
  SiMaterialUi,
} from "react-icons/si";
const Header = styled.div`
  height: 80px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin: 0 auto;
`;
const Tech = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  width: 50%;
  // margin: 100px auto;
  margin-bottom: 0;
  color: #0099ff;
  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 2.9rem;
    list-style-type: none;
    flex-direction: row;
    margin: 10px;

    li {
      padding: 15px;
      color: #0099ff;
      div {
        font-size: 1rem;
      }
    }
  }
`;
const Frontend = styled.div`
  width: 100%;
  z-index: 1;
  margin: 0 auto;
`;
const Backend = styled.div`
  width: 100%;
  z-index: 1;
  margin: 0 auto;
`;
const Exp = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Technology = () => {
  return (
    <>
      <Header id="skills"></Header>
      <h1>Skills and Experience</h1>
      <Main>
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
                <SiMaterialUi />
                <div>MaterialUI</div>
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
                <SiPostman />
                <div>Postman</div>
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
        <Exp>
          <div>Ajax</div>
          <div>ES6</div>
          <div>Responsive UI</div>
          <div>MVP</div>
          <div>Fetch/Axios</div>
          <div>JWT/OAuth</div>
        </Exp>
      </Main>
    </>
  );
};
export default Technology;
