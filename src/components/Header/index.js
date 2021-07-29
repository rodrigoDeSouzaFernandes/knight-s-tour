import React from 'react'

import logo from '../../imgs/horse.png'

import {HeaderBody, HeaderImg, Title } from './syled'

function Header() {
  return (
    <HeaderBody>
      <Title>O Passeio do Cavalo</Title>
      <div>
        <HeaderImg src={ logo } alt="Horse logo" />
        <HeaderImg src={ logo } alt="Horse logo" />
      </div>
    </HeaderBody>
  )
}

export default Header;
