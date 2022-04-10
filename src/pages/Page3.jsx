import React, { Component } from 'react'
import encapuzado from '../assets/encapuzado.png';

export default class Page3 extends Component {
  render() {
    return (
      <div className='page2'>
        <div>
          <p className='text'>
          "E em certo momento, enquanto estava perdida em meus pensamentos, alguem se aproximou de mim"
          </p>
          <p className='text'>
          "Vejo que procura algo, senhorita."<br/>
          "Se quiser posso te oferecer algo que irá te ajudar muito em suas buscas" Disse o estranho ser, sorrindo de forma desconfortavelmente amigável. Suas roupas tinham uma leve tonalidade roxa, mas que com o passar do tempo foram ficando desbotadas.<br/>
          Ele usava um capuz, escondendo quase todo o seu rosto, deixando-o ainda mais intrigante.
          </p>
        </div>
        <img className='stranger' src={encapuzado} alt="Homem encapuzado" />
      </div>
    )
  }
}