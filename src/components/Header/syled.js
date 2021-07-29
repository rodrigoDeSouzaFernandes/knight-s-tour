import styled from 'styled-components';

export const HeaderBody = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: linear-gradient(grey, gainsboro);
  color: rgb(30,  30, 50)
`;

export const HeaderImg = styled.img`
  width: 100px;
  height: 50px;

  :nth-child(even) {
    filter: invert(100%);
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: 'Merienda', cursive;
  color: white;
  font-size: 30px;
  text-shadow: 5px 5px 5px black;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 370px) {
    font-size: 20px;
  }
`;