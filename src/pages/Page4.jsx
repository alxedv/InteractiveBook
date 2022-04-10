import React, { Component } from 'react'
import encapuzado from '../assets/encapuzado.png';

export default class Page4 extends Component {
  render() {
    return (
      <div className='page2'>
        <div>
          <p className='text'>
          "Não, obrigada. Acho que prefiro continuar as minhas pesquisas do meu jeito. Mas como você sabe que estou procurando algo?"
          </p>
          <p className='text'>
          O homem encapuzado sorriu ainda mais ao ouvir essa pergunta.
          "Ora, foi justamente com este artefato que estou lhe oferecendo. Ele sabe de muita coisa."
          </p>
          <p className='text'>"Como assim? Ele te contou sobre mim?"<br/>
          "Muitas perguntas, minha querida. E todas elas podem ser respondidas por ele."<br/>
          "Certo, digamos que ele faça tudo isso mesmo, o que você quer em troca?"<br/>
          "Nada, apenas que o utilize."<br/>
          "Apenas isso? Tem certeza? Se ele é tão incrível, porque só isso? "</p>
        </div>
        <img className='stranger' src={encapuzado} alt="Homem encapuzado" />
      </div>
    )
  }
}