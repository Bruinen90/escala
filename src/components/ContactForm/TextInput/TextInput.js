import React, { Component } from 'react';
import styles from './TextInput.module.css';
import products from '../../../data/productsDone.js';

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
        const productsOptions = products.map(product => {
            return (
                <option value={product.name} key={product.name}>{product.name}</option>
            )
        })
        if(this.props.inputName === 'topic') {
            return (
                <React.Fragment>
                    <select
                        className={styles.input}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        onChange={(e) => this.props.handleChange(e, this.props.inputName)}
                        style = {setStyle()}
                        ref={(ref) => this.inputsArr[this.props.inputName] = ref}
                        onFocus={()=>this.scrollToElement(this.props.inputName)}
                        value={this.props.value}
                        name="topics"
                        required={true}
                    >
                        <option value="" disabled defaultValue hidden>temat</option>
                        <option value="Zapytaj o cenę">Zapytaj o cenę</option>
                        <option value="Oferta">Oferta</option>
                        <option value="Współpraca">Współpraca</option>
                        <option value="Model 3D">Model 3D</option>
                        <option value="Katalog produktów">Katalog produktów</option>
                        <option value="Współpraca">Współpraca</option>
                        <option value="Wzornik">Wzornik</option>
                        <option value="Press">Press</option>
                        {productsOptions}
                    </select>
                    {/* <input
                        className={styles.input}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        onChange={(e) => this.props.handleChange(e, this.props.inputName)}
                        style = {setStyle()}
                        ref={(ref) => this.inputsArr[this.props.inputName] = ref}
                        onFocus={()=>this.scrollToElement(this.props.inputName)}
                        value={this.props.value}
                        list="browsers"
                    />
                    <datalist id="browsers">
                        <option value="Zapytaj o cenę" />
                        <option value="Oferta" />
                        <option value="Współpraca" />
                        <option value="Model 3D" />
                        <option value="Katalog produktów" />
                        <option value="Współpraca" />
                        <option value="Wzornik" />
                        <option value="Press" />
                        {productsOptions}
                    </datalist> */}
                </React.Fragment>
            )
        } else if(this.props.type === 'textarea') {
            return (
                <textarea
                    className={[styles.input, styles.message].join(' ')}
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.props.handleChange(e, this.props.inputName)}
                    style = {setStyle()}
                    ref={(ref) => this.inputsArr[this.props.inputName] = ref}
                    onFocus={()=>this.scrollToElement(this.props.inputName)}
                    value={this.props.value}
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
                    value={this.props.value}
                />
            )
        }
    }
}
export default TextInput;
