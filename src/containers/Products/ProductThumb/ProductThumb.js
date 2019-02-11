import React, { Component } from 'react';
import styles from './ProductThumb.module.css';
import { withRouter } from 'react-router-dom';
import product from '../../../data/products';
import { CSSTransitionGroup } from 'react-transition-group';
import './Animations.css';

class ProductThumb extends Component {
    state = {
        picNum: 1,
    }

    hoverHandler = (on) => {
        on ? this.setState({picNum: product[this.props.index].imagesCount}) : this.setState({picNum: 1})
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
                    <CSSTransitionGroup
                        transitionName="fadeIn"
                        transitionEnterTimeout={100}
                        transitionLeaveTimeout={100}
                    >
                        <img
                            src={require(`../../../img/products/product_${this.props.index+1}/${this.state.picNum}.jpg`)}
                            alt="Test"
                            className={styles.thumb}
                            key={this.props.index + '_' + this.state.picNum}
                        />
                    </CSSTransitionGroup>
                </div>
                {/* <h3 className={styles.type}>{this.props.type}</h3> */}
                <h3 className={styles.name}>{this.props.name}</h3>
            </div>
        );
    }
}
export default withRouter(ProductThumb);
