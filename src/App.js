import React, { Component } from 'react'
import './App.css';
import sound from './assets/ambienceSound.mp3';
import piano from './assets/piano.mp3';
import Page0 from './pages/Page0';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      page: 0
    }
  }

  runPiano() {
    var audio = new Audio(piano)
    audio.play();
  }

  runAudio() {
    var audio = new Audio(sound)
    audio.play();
  }

  render() {
    const { page } = this.state;
    return (
      <div className='main'>
        <div className='texts'>
        {page === 0 && <Page0 />}
        {page === 1 && <Page1 />}
        {page === 2 && <Page2 />}
        {page === 3 && <Page3 />}
        {page === 4 && <Page4 />}
        {page === 5 && <Page5 />}
        {page === 6 && <Page6 />}
        {page === 7 && <Page7 />}
        {page === 8 && <Page8 />}
        {page === 9 && this.setState({ page: 0 })}
        {page === 0 && <button className='ambienceSound' onClick={this.runAudio}>Som ambiente</button>}
        {page >= 3 && this.runPiano()}
        
        </div>
        <button
          className='next-btn'
          onClick={() => this.setState({ page: page + 1 })}
        >
          {'>'}
        </button>
      </div>
      
    )
  }
}

