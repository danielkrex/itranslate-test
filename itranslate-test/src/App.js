import React, { Component } from 'react';
import flagUk from './img/flag-uk.svg';
import flagDe from './img/flag-de.svg';
import flagEs from './img/flag-es.svg';
import iconSwitch from './img/iconSwitch.svg';
import './App.css';
import './fonts/fonts.css';
import TranslateInput from './components/TranslateInput';
import TranslateOutput from './components/TranslateOutput'


class App extends Component {

  state = {
    currentLang: 'en',
    translateInput: 'fruit',
    translateOutput: '',
    animationState: false
  };

  translate() {
    const currentLang = this.state.currentLang;
    const translateInput = this.state.translateInput;
    debugger;
    if (currentLang === 'en' && translateInput === 'fruit') {
      this.setState({
        translateOutput: 'obst'
      });
    }
    else {
      this.setState({
        translateOutput: 'No translation'
      });
    }
  };

  submitInput = (inputValue, lang, btn) => {
    if (btn == 'Enter') {
      debugger;
      this.setState({
        translateInput: inputValue,
        currentLang: lang
      });
      this.setState({
        animationState: false
      });
      setTimeout(
        function() {
            this.translate();
        }
        .bind(this),
        300
    );
    }
    else {
      this.setState({
        animationState: true,
        translateOutput: ''
      })
    }
  };

  render() {
    return (
      <div className="app-holder">

        <TranslateInput submitInput={this.submitInput} ></TranslateInput>
        <div className="devider">
          <hr />
          <button id="translate-switch">
            <img src={iconSwitch} />
          </button>
        </div>

        <TranslateOutput result={this.state.translateOutput} animation={this.state.animationState}></TranslateOutput>
      </div>

    )
  };
}

export default App;
