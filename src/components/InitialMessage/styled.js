import styled from 'styled-components';

export const MessageBody = styled.div`
  align-items: center;
  background: rgba(200, 200, 200, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 10px;
  position: absolute;
  z-index: 1;
`;

export const MessageContainer = styled.div`
  background: white;
  border-radius: 5px;
  padding: 30px;
  width: 35%;
  
  @media screen and (max-width: 880px) {
    width: 60%;
  }

  @media screen and (max-width: 880px) {
    width: 100%;
  }
`;

export const MessageText = styled.p`
  font-weight: 550;
  text-align: left;
  text-shadow: 3px 3px 5px grey;
`;

export const MessageButton = styled.button`
  background: seaGreen;
  border: none;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  padding: 10px 20px;
`;
