import React from 'react';
import { FaGithub, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import ReactAudioPlayer from 'react-audio-player';
//...


import { Container, Item, Icons } from './styles';

function Main() {
  return (
    <>
    <Container>


      <Item>
        <h1>Simone</h1>
        <h2>EU TE AMO DEMAIS</h2>
        <img src="/docs/foto.jpg" alt="Flowers in Chania" width='250px'/>
        <Icons>
          <p>
          <img src="/docs/tenor1.gif" alt="Flowers in Chania" />

          </p>
          <p>
          <img src="/docs/tenor2.gif" alt="Flowers in Chania"/>

          </p>
          <p>
          <img src="/docs/tenor3.gif" alt="Flowers in Chania"/>
          </p>
        </Icons>
      </Item>

    </Container>


    <ReactAudioPlayer
        src="/docs/music.mp3"
        autoPlay='true'
        controls
      />
      </>
  );
}

export default Main;
