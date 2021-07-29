import React, {useState} from 'react'

import { MessageBody, MessageContainer, MessageText, MessageButton } from './styled'

function InitialMessage() {

  const [ active, setActive ] = useState(true);

  return (
    active && (
      <MessageBody>
      <MessageContainer>
        <MessageText>
          Seja bem vindo à resolução do desafio "O Passeio do cavalo"
        </MessageText>
        <MessageText>
          Selecione uma casa do tabuleiro e então clique em começar,
          caso não selecione nenhuma, a casa inicial será "a1"
        </MessageText>
        <MessageButton
          onClick={ () => setActive(false) }
        >
          OK
        </MessageButton>
      </MessageContainer>
    </MessageBody>
    )
  )
}

export default InitialMessage;
