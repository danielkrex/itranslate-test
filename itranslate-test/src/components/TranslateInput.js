import React, { Component } from 'react';
import PropTypes from 'prop-types';

import flagUk from '../img/flag-uk.svg';
import flagDe from '../img/flag-de.svg';
import flagEs from '../img/flag-es.svg';

export class TranslateInput extends Component {
    state = {
        inputValue: '',
        lang: 'en',
        clicked: false,
        languageName: 'English'
    }

    handelInput = (e) => {
        if (e.key === 'Enter') {
            console.log('ENTER PRESSED');
            this.props.submitInput(this.state.inputValue, this.state.lang, e.key);
        }
        else {
            this.props.submitInput('none', 'none', e.key);
            this.onChange(e);
        }
    }

    onChange = (f) => {
        this.setState({ [f.target.name]: f.target.value });
    }

    changeLang = (i) => {
        this.setState({
            lang: i.target.id
        })
        this.clicked(i);
        setTimeout(
            function() {
                if( this.state.lang == 'en'){
                    this.setState({
                        languageName: 'English'
                    })
                }
                else if( this.state.lang == 'de'){
                    this.setState({
                        languageName: 'German'
                    })
                }
                else if( this.state.lang == 'es'){
                    this.setState({
                        languageName: 'Spanish'
                    })
                }
            }
            .bind(this),
            100
        );
    }

    getStyle = () => {
        return {
            display: this.state.clicked ? 'block' : 'none'
        }
      }

    activeFlag() {
        if (this.state.lang == 'es') {
            return <img src={flagEs} className="selected" alt="Logo" />;
        }
        else if (this.state.lang == 'en') {
            return <img src={flagUk} className="selected" alt="Logo" />;
        }
        else if (this.state.lang == 'de') {
            return <img src={flagDe} className="selected" alt="Logo" />;
        }
    }

    clicked = (e) => {
        const clickedState = this.state.clicked;
        this.setState({
            clicked : !clickedState
        })
    }

    render() {
        return (
            <div className="input-holder translate-input">
                <div className="topPart">
                    {<div className="language" onClick={this.clicked}>
                        {this.activeFlag()}
                    </div>}
                    <div className="choose-lang" style={this.getStyle()}>
                    {<div onClick={this.changeLang} id="en">
                            <img src={flagUk} id='en' /> <span id='en'>English</span>
                </div>}
                {<div onClick={this.changeLang} id="de">
                            <img src={flagDe} id='de' /> <span id='de'>German</span>
                </div>}
                {<div onClick={this.changeLang} id="es">
                            <img src={flagEs} id='es' /> <span id='es'>Spanish</span>
                </div>}
                    </div>
                    <p>From {this.state.languageName}</p>
                </div>
                <div className="botPart">
                    <input
                        onChange={this.onChange}
                        name="inputValue"
                        value={this.state.inputValue}
                        onKeyDown={this.handelInput}
                    />
                </div>
            </div>
        )
    }
}

// PropTypes
TranslateInput.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default TranslateInput
