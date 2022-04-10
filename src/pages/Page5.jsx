import React, { Component } from 'react'
import encapuzado from '../assets/encapuzado.png';

export default class Page5 extends Component {
  render() {
    return (
      <div className='page2'>
        <div>
          <p className='text'>
          Mesmo com a desconfiança de Yasmin, o homem continuava com seu sorriso impassivo.<br/>
          "Ora, e porque eu iria querer outra coisa?<br/>Algo assim deveria ser usado por todos necessitados de informações."<br/>
          Neste momento, o homem estende sua mão, segurando um pequeno embrulho
          </p>
          <p className='text'>
          "Você aceita?"<br/>
          "Bom... Eu..."<br/>
          Mesmo relutante em dizer, no fundo a sua curiosidade estava quase te sufocando para saber se aquilo realmente iria te ajudar.<br/>
          "Você aceita?"<br/>
          "Tá bom... Eu aceito."<br/>
          "Muito bem, minha querida."<br/>
          </p>
          
        </div>
        <img className='stranger' src={encapuzado} alt="Homem encapuzado" />
      </div>
    )
  }
}