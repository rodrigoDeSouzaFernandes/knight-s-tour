import styled from 'styled-components';
import horse from '../../imgs/horse.png'

export const BoardBody = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
`;

export const Square = styled.div`
  width: 50px;
  height: 50px;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  background: white;

  @media screen and (max-width: 490px) {
    width: 30px;
    height: 30px;
  }
`;

export const Knight = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${horse});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 490px) {
    width: 30px;
    height: 30px;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;

  :nth-child(even) div:nth-child(even),
  :nth-child(ODD) div:nth-child(ODD){
    background-color: white;
    color: teal;
    filter: invert(100%);
  }

  p {
    width: 50px;
  }

  @media screen and (max-width: 490px) {
    p {
      width: 30px;
      height: 30px;
      margin:0
    }

    height: 30px;
  }
`;

export const Move = styled.span`
  width: 12%;
  min-width: 70px;
  background: white;
  :nth-child(odd){
    background: rgb(200, 200, 200);
  }

  @media screen and (max-width: 490px) {
    min-width: 55px;
    font-size: 12px;
  }
`;

export const Movements = styled.p`
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  line-height: 2;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  height: fit-content;

  @media screen and (max-width: 490px) {
    width: 100%;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: start;

  @media screen and (max-width: 880px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Columns = styled.div`display: flex;
  align-self: flex-end;
  p {
    width: 50px;
  }

  @media screen and (max-width: 490px) {
    p {
      width: 30px;
    }
  }
`;

export const MovementsContainer = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 880px) {
    height: fit-content;
  }
`;

export const BtnPlay = styled.button`
  align-self: flex-end;
  width: 400px;
  height: 50px;
  color: white;
  font-size: 25px;
  background: seaGreen;
  border: none;
  border-radius: 5px;
  margin: 2px 0;
  font-family: 'Merienda', cursive;

  :disabled {
    background-color: grey;
  }

  @media screen and (max-width: 490px) {
    width: 240px;
  }
`;

