import styled from 'styled-components';

export const MessageBody = styled.div`
  position: absolute;
  padding: 10px;
  z-index: 1;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: rgba(200, 200, 200, 0.5);
  backdrop-filter: blur(10px);
`;

export const MessageContainer = styled.div`
  width: 35%;
  border-radius: 5px;
  background: white;
  padding: 30px;
  
  @media screen and (max-width: 880px) {
    width: 60%;
  }

  @media screen and (max-width: 880px) {
    width: 100%;
  }
`;

export const MessageText = styled.p`
  text-align: left;
  font-weight: 550;
  text-shadow: 3px 3px 5px grey;
`;

export const MessageButton = styled.button`
  padding: 10px 20px;
  background: seaGreen;
  border: none;
  border-radius: 3px;
  color: white;
  font-weight: 600;
`;
