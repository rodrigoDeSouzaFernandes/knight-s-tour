import styled from 'styled-components';

export const HeaderBody = styled.header`
  align-items: center;
  background: linear-gradient(grey, gainsboro);
  color: rgb(30,  30, 50);
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;

export const HeaderImg = styled.img`
  height: 50px;
  width: 100px;

  :nth-child(even) {
    filter: invert(100%);
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.h1`
  color: white;
  font-family: 'Merienda', cursive;
  font-size: 30px;
  text-shadow: 5px 5px 5px black;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 370px) {
    font-size: 20px;
  }
`;