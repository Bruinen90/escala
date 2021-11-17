import React, { Component } from 'react';
import styles from './ProductRow.module.css';
import { withRouter } from 'react-router-dom';

class ProductRow extends Component {
	render() {
		return (
			<div
				className={styles.container}
				onClick={() =>
					this.props.history.push(
						`/products/product_${this.props.index + 1}`
					)
				}
			>
				<div
					className={[
						styles.imageContainer,
						this.props.index === 8 && styles.high,
					].join(' ')}
				>
					<img
						src={require(`../../../img/thumbs/${this.props.keyName}.jpg`)}
						alt={this.props.name}
						className={styles.thumb}
					/>
				</div>
				<h3 className={styles.name}>{this.props.name}</h3>
			</div>
		);
	}
}
export default withRouter(ProductRow);
