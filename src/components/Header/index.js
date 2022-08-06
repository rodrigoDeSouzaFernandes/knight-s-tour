import React from "react";

import logo from "../../imgs/horse.png";

import { Container, HeaderBody, HeaderImg, Title } from "./syled";

function Header() {
  return (
    <HeaderBody>
      <Container>
        <Title>O Passeio do Cavalo</Title>
        <div>
          <HeaderImg src={logo} alt="Horse logo" />
          <HeaderImg src={logo} alt="Horse logo" />
        </div>
      </Container>
    </HeaderBody>
  );
}

export default Header;
