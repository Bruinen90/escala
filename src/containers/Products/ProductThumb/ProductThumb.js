import React, { Component } from 'react';
import styles from './ProductThumb.module.css';
import { withRouter } from 'react-router-dom';

class ProductThumb extends Component {
    state = {
        picNum: 1,
    }
    render() {
        return (
            <div
                className={styles.container}
                onClick={()=>this.props.history.push(`/products/product_${this.props.index+1}`)}
            >
                <div className={[
                    styles.imageContainer,
                    this.props.index === 8 && styles.high].join(' ')}>
                    <img
                        // src={require(`../../../img/products/product_${this.props.index+1}/${this.state.picNum}.jpg`)}
                        src={require(`../../../img/thumbs/${this.props.index+1}.jpg`)}
                        alt={this.props.name}
                        className={styles.thumb}
                    />
                </div>
                {/* <h3 className={styles.type}>{this.props.type}</h3> */}
                <h3 className={styles.name}>{this.props.name}</h3>
            </div>
        );
    }
}
export default withRouter(ProductThumb);
