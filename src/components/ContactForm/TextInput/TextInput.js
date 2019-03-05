import React, { Component } from 'react';
import styles from './TextInput.module.css';
import products from '../../../data/productsDone.js';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTopics: false,
        }
        this.inputsArr = [];
        this.scrollToElement = (index, value) => {
            if(window.innerWidth < 769 && !this.state.showTopics) {
                window.scrollTo({top: this.inputsArr[index].offsetTop + 50, behavior: 'smooth'})
            }
            if(index === 'topic') {
                this.setState({showTopics: true})
            }
        }

        this.changeTopic = (e) => {
            this.props.handleChange(e, 'topic');
            if(e.target.value) {
                this.setState({showTopics: false})
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
                // <option value={product.name} key={product.name}>{product.name}</option>
                // <option value={product.name} key={product.name} />
                <li key={product.name} onClick={(e)=>this.changeTopic(e)}>{product.name}</li>
            )
        })

        if(this.props.inputName === 'topic') {
            return (
                <React.Fragment>
                    {/*
                        Wersja z select
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
                    </select> */}
                    {/*
                        Wersja z wpisywaniem
                        <input
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
                    <div className={styles.selectCont}>
                        <input
                            className={styles.input}
                            type={this.props.type}
                            placeholder={this.props.placeholder}
                            onChange={(e)=>this.changeTopic(e)}
                            style = {setStyle()}
                            ref={(ref) => this.inputsArr[this.props.inputName] = ref}
                            onFocus={()=>this.scrollToElement(this.props.inputName, this.props.value)}
                            onBlur={()=>
                                setTimeout(()=>this.setState({showTopics: false}),100)
                            }
                            value={this.props.value}
                        />
                        <div
                            className={[styles.listToggler, this.state.showTopics && styles.listTogglerActive].join(' ')}
                            onClick={()=>this.setState({showTopics: !this.state.showTopics})}
                        >V</div>
                        <ul
                            className={[styles.options, !this.state.showTopics && styles.optionsHidden].join(' ')}
                        >
                            <li onClick={(e)=>this.changeTopic(e)}>Zapytaj o cenę</li>
                            <li onClick={(e)=>this.changeTopic(e)}>Oferta</li>
                            <li onClick={(e)=>this.changeTopic(e)}>Współpraca</li>
                            <li onClick={(e)=>this.changeTopic(e)}>Model 3D</li>
                            <li onClick={(e)=>this.changeTopic(e)}>Katalog produktów</li>
                            <li onClick={(e)=>this.changeTopic(e)}>Współpraca</li>
                            <li onClick={(e)=>this.changeTopic(e)}>Wzornik</li>
                            <li onClick={(e)=>this.changeTopic(e)}>Press</li>
                            {productsOptions}
                        </ul>
                    </div>
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
