import styled from "styled-components";
import horse from "../../imgs/horse.png";

export const BoardBody = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
`;

export const Square = styled.div`
  align-items: center;
  background: white;
  color: red;
  display: flex;
  font-weight: 900;
  height: 50px;
  justify-content: center;
  width: 50px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  @media screen and (max-width: 490px) {
    height: 30px;
    width: 30px;
  }
`;

export const Knight = styled.div`
  background-image: url(${horse});
  background-position: center;
  background-size: cover;
  height: 50px;
  width: 50px;
  outline: none;
  border: none;

  @media screen and (max-width: 490px) {
    height: 30px;
    width: 30px;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;

  :nth-child(even) div:nth-child(even),
  :nth-child(ODD) div:nth-child(ODD) {
    background-color: white;
    color: teal;
    filter: invert(100%);
  }

  p {
    width: 50px;
    text-align:center;
  }

  @media screen and (max-width: 490px) {
    p {
      height: 30px;
      margin: 0;
      width: 30px;
    }

    height: 30px;
  }
`;

export const Move = styled.span`
  background: white;
  min-width: 70px;
  padding: 0 3px;
  :nth-child(odd) {
    background: rgb(200, 200, 200);
  }

  @media screen and (max-width: 490px) {
    min-width: 55px;
    font-size: 12px;
  }
`;

export const Movements = styled.p`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  justify-content: stretch;
  line-height: 2;
  margin: 10px;
  text-align: center;
`;

export const Body = styled.div`
  align-items: start;
  display: flex;
  justify-content: center;
  padding: 30px;

  @media screen and (max-width: 880px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Columns = styled.div`
  display: flex;
  align-self: flex-end;

  p {
    width: 50px;
    text-align:center;
  }

  @media screen and (max-width: 490px) {
    p {
      width: 30px;
    }
  }
`;

export const MovementsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  padding-left: 20px;
  width: 100%;

  @media screen and (max-width: 880px) {
    height: fit-content;
  }
`;

export const BtnPlay = styled.button`
  align-self: flex-end;
  background: seaGreen;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "Merienda", cursive;
  font-size: 25px;
  height: 50px;
  margin: 2px 0;
  width: 400px;

  :disabled {
    background-color: grey;
  }

  @media screen and (max-width: 490px) {
    width: 240px;
  }
`;
