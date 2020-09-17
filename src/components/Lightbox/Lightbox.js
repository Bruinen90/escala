import React, { Component } from 'react';
import styles from './Lightbox.module.css';

class Lightbox extends Component {
    state = {
        showLigthbox: true,
    }
    render() {
        return (
                <div className={styles.lightbox} style={{display: this.state.showLigthbox ? 'flex' : 'none'}}>
                    <div
                        className={styles.cover}
                        onClick={()=>this.setState({showLigthbox: false})}
                    ></div>
                    {this.props.children}
                </div>
        );
    }
}
export default Lightbox;
