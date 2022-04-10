import React, { Component } from 'react'
import stone from '../assets/stone.png';

export default class Page6 extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true
    }
  }
  render() {
    const { hidden } = this.state;
    return (
      <div className='page2'>
        <div>
          <button
            onClick={() => this.setState({ hidden: false })}
            className='reveal-stone'
          >
            Desembrulhar objeto
          </button>
          {
            !hidden && (
              <div className='stone-div'>
                <p className='text'>
                O objeto tinha certo peso, e ao desembrulha-lo revelou-se algo que se parecia com um tipo de pedra.
                </p>
                <p className='text'>
                E no meio estava encravado um simbolo, três riscos que se conectavam em um mesmo ponto.
                </p>
                <img className='stranger' src={stone} alt="" />
              </div>
            )
          }  
        </div>
      </div>
    )
  }
}