import React, { Component } from 'react';
import styles from './TextInput.module.css';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.inputsArr = [];
        this.scrollToElement = (index) => {
            if(window.innerWidth < 769) {
                window.scrollTo({top: this.inputsArr[index].offsetTop, behavior: 'smooth'})
            }
        }
    }
    render() {
        const setStyle = () => {
            if(!this.props.valid && this.props.changed ) {
                return {borderColor: 'red'}
            }
            else {
                return {}
            }
        }
        if(this.props.type === 'textarea') {
            return (
                <textarea
                    className={[styles.input, styles.message].join(' ')}
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.props.handleChange(e, this.props.inputName)}
                    style = {setStyle()}
                    ref={(ref) => this.inputsArr[this.props.inputName] = ref}
                    onFocus={()=>this.scrollToElement(this.props.inputName)}
                />
            )
        } else {
            return (
                <input
                    className={styles.input}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.props.handleChange(e, this.props.inputName)}
                    style = {setStyle()}
                    ref={(ref) => this.inputsArr[this.props.inputName] = ref}
                    onFocus={()=>this.scrollToElement(this.props.inputName)}
                />
            )
        }
    }
}
export default TextInput;
