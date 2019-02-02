import React, { Component } from 'react';
import styles from './ProductThumb.module.css';
import { withRouter } from 'react-router-dom';
import img from '../../../img/products/product_1/img_1.jpg';

class ProductThumb extends Component {
    state = {
        picNum: 1,
    }

    hoverHandler = (on) => {
        on ? this.setState({picNum: 2}) : this.setState({picNum: 1})
    }
    render() {
        return (
            <div
                className={styles.container}
                onClick={()=>this.props.history.push(`/products/product_${this.props.index+1}`)}
                onMouseOver = {()=>this.hoverHandler(true)}
                onMouseLeave = {()=>this.hoverHandler(false)}
            >
                <div className={styles.imageContainer}>
                    <img
                        src={require(`../../../img/products/product_${this.props.index+1}/img_${this.state.picNum}.jpg`)}
                        alt="Test"
                        className={styles.thumb}
                    />
                </div>
                <h3 className={styles.type}>{this.props.type}</h3>
                <h3 className={styles.name}>{this.props.name}</h3>
            </div>
        );
    }
}
export default withRouter(ProductThumb);
