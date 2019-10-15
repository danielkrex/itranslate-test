import React, { Component } from 'react';

import PropTypes from 'prop-types';

import flagUk from '../img/flag-uk.svg';
import flagDe from '../img/flag-de.svg';
import flagEs from '../img/flag-es.svg';

class TranslateOutput extends Component {
    state = {
        inputValue: '',
        lang: 'de',
        clicked: false,
        languageName: 'German'
    }

    getStyle = () => {
        return {
            display: this.props.animation ? 'block' : 'none'
        }
    }

    getStyle1 = () => {
        return {
            display: this.state.clicked ? 'block' : 'none'
        }
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

        const result = this.props.result;
        return (
            <div className="input-holder translate-output">
                <div className="topPart">
                    {<div className="language" onClick={this.clicked}>
                        {this.activeFlag()}
                    </div>}
                        <div className="choose-lang" style={this.getStyle1()}>
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
                <p>to {this.state.languageName}</p>
                </div>
            <div className="botPart">
                <p className="result">{result}</p>
                <div className="waiting" style={this.getStyle()} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            </div>
        )
    };
}

// PropTypes
TranslateOutput.propTypes = {
    result: PropTypes.object.isRequired,
    animation: PropTypes.object.isRequired
}

export default TranslateOutput;