import React, { Component } from 'react';
import styles from './Products.module.css';
import { Translate, withLocalize } from 'react-localize-redux';

import SubPage from '../SubPage/SubPage';
import ProductRow from './ProductRow/ProductRow';
import data from '../../data/productsData';
import translations from './translations';

class Products extends Component {
	constructor(props) {
		super(props);
		this.props.addTranslation(translations);
	}
	render() {
		const productsOutput = Object.entries(data.data).map(
			([keyName, info], index) => {
				return (
					<ProductRow
						name={info.name}
						type={info.type}
						key={index}
						index={index}
						keyName={keyName}
						thumbPhoto={info.thumbPhoto}
						featuredPhotos={info.featuredPhotos}
						thumbsLayout={info.thumbsLayout}
					/>
				);
			}
		);
		return (
			<SubPage title={<Translate id='mainHeader' />} number='02'>
				<div className={styles.container}>
					<div className={styles.grid}>{productsOutput}</div>
				</div>
			</SubPage>
		);
	}
}
export default withLocalize(Products);
