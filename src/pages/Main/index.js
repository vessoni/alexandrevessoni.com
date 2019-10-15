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
            <FaGithub size="3em" />
          </p>
          <p>
            <FaLinkedin size="3em" />
          </p>
          <p>
            <FaFacebookSquare size="3em" />
          </p>
        </Icons>
      </Item>
    </Container>
  );
}

export default Main;
