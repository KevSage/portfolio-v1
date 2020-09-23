import React from "react";
import styled from "styled-components";
import Tongue from "../Media/Tongue.png";
import Festivalz from "../Media/Festivalz.png";
import Memory from "../Media/Memory.png";
import China from "../Media/China.png";
import Engadget from "../Media/Engadget.png";

import { FaGithub, FaCodepen } from "react-icons/fa";

const Work = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Project = styled.div`
  margin: 0 auto;
  display: flex;
  width: 80%;
  //   justify-content: center;
  flex-direction: column;
  h3 {
    font-family: "Pacifico", cursive;
    color: #e7008a;
    font-size: 3rem;
  }
  img {
    width: 100%;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid royalblue;
  color: #97d8b2;
  //   padding: 1em 1em;
  width: 25%;
  margin: 30px;
  &:hover {
    background: #0099ff;
    color: #97d8b2;
    cursor: pointer;
  }
`;
const Description = styled.div`
  width: 100%;
  padding: 40px;
  text-align: left;
  //   @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
`;
const Projects = () => {
  return (
    <Work>
      <h1>Projects</h1>
      <Project>
        <h3>Tongue.io</h3>
        <Main>
          <Left>
            <img className="project_img" src={Tongue}></img>
            <div>
              <Button>
                <FaGithub />
              </Button>
              <Button>Demo</Button>
            </div>
          </Left>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non lobortis urna, at mollis leo. Pellentesque quis felis eu nunc
            porttitor placerat sed ut ligula. Pellentesque vitae magna sapien.
            Nunc in ligula rhoncus, efficitur massa eget, pellentesque ipsum.
            Integer tempus ultricies purus, nec ultrices sem pulvinar vel. In
            tincidunt tristique.
          </Description>
        </Main>
      </Project>
      <Project>
        <h3>Who's Going</h3>
        <Main>
          <Left>
            <img className="project_img" src={Festivalz}></img>
            <div>
              <Button>
                <FaGithub />
              </Button>
              <Button>Demo</Button>
            </div>
          </Left>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non lobortis urna, at mollis leo. Pellentesque quis felis eu nunc
            porttitor placerat sed ut ligula. Pellentesque vitae magna sapien.
            Nunc in ligula rhoncus, efficitur massa eget, pellentesque ipsum.
            Integer tempus ultricies purus, nec ultrices sem pulvinar vel. In
            tincidunt tristique.
          </Description>
        </Main>
      </Project>
      <Project>
        <h3>Memory Match - Dev Edition</h3>
        <Main>
          <Left>
            <img className="project_img" src={Memory}></img>
            <div>
              <Button>
                <FaGithub />
              </Button>
              <Button>Demo</Button>
            </div>
          </Left>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non lobortis urna, at mollis leo. Pellentesque quis felis eu nunc
            porttitor placerat sed ut ligula. Pellentesque vitae magna sapien.
            Nunc in ligula rhoncus, efficitur massa eget, pellentesque ipsum.
            Integer tempus ultricies purus, nec ultrices sem pulvinar vel. In
            tincidunt tristique.
          </Description>
        </Main>
      </Project>
      <Project>
        <h3>Travel China</h3>
        <Main>
          <Left>
            <img className="project_img" src={China}></img>
            <div>
              <Button>
                <FaCodepen />
              </Button>
            </div>
          </Left>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non lobortis urna, at mollis leo. Pellentesque quis felis eu nunc
            porttitor placerat sed ut ligula. Pellentesque vitae magna sapien.
            Nunc in ligula rhoncus, efficitur massa eget, pellentesque ipsum.
            Integer tempus ultricies purus, nec ultrices sem pulvinar vel. In
            tincidunt tristique.
          </Description>
        </Main>
      </Project>
      <Project>
        <h3>Engadget Clone</h3>
        <Main>
          <Left>
            <img className="project_img" src={Engadget}></img>
            <div>
              <Button>
                <FaCodepen />
              </Button>
            </div>
          </Left>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non lobortis urna, at mollis leo. Pellentesque quis felis eu nunc
            porttitor placerat sed ut ligula. Pellentesque vitae magna sapien.
            Nunc in ligula rhoncus, efficitur massa eget, pellentesque ipsum.
            Integer tempus ultricies purus, nec ultrices sem pulvinar vel. In
            tincidunt tristique.
          </Description>
        </Main>
      </Project>
    </Work>
  );
};
export default Projects;
