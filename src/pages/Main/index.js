import React from 'react';
import { FaGithub, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

import { Container, Item, Icons } from './styles';

function Main() {
  return (
    <Container>
      <Item>
        <h1>Alexandre Vessoni</h1>
        <h2>Web Developer</h2>
        <Icons>
          <p>
            <a href="https://github.com/vessoni">
              <FaGithub size="2.5em" />
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/alexandrevessoni/">
              <FaLinkedin size="2.5em" />
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/AlexandreVessoni">
              <FaFacebookSquare size="2.5em" />
            </a>
          </p>
        </Icons>
      </Item>
    </Container>
  );
}

export default Main;
