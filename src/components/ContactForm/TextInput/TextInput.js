import React, { Component } from 'react';
import { Translate, withLocalize } from 'react-localize-redux';

import data from './data.json';
import styles from './TextInput.module.css';
import products from '../../../data/productsDone.js';

class TextInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showTopics: false,
		};
		this.inputsArr = [];
		this.scrollToElement = (index, value) => {
			if (window.innerWidth < 769 && !this.state.showTopics) {
				window.scrollTo({
					top: this.inputsArr[index].offsetTop + 50,
					behavior: 'smooth',
				});
			}
			if (index === 'topic') {
				this.setState({ showTopics: true });
			}
		};

		this.changeTopic = e => {
			this.props.handleChange(e, 'topic');
			if (e.target.value) {
				this.setState({ showTopics: false });
			}
		};
		this.props.addTranslation(data);
	}
	render() {
		const setStyle = () => {
			if (!this.props.valid && this.props.changed) {
				return { borderColor: 'red' };
			} else {
				return {};
			}
		};
		const productsOptions = products.map(product => (
			<li key={product.name} onClick={e => this.changeTopic(e)}>
				{product.name}
			</li>
		));

		if (this.props.inputName === 'topic') {
			return (
				<div className={styles.selectCont}>
					<input
						className={styles.input}
						type={this.props.type}
						placeholder={this.props.placeholder}
						onChange={this.changeTopic}
						style={setStyle()}
						ref={ref =>
							(this.inputsArr[this.props.inputName] = ref)
						}
						onFocus={() =>
							this.scrollToElement(
								this.props.inputName,
								this.props.value
							)
						}
						onBlur={() =>
							setTimeout(
								() => this.setState({ showTopics: false }),
								100
							)
						}
						value={this.props.value}
					/>
					<div
						className={[
							styles.listToggler,
							this.state.showTopics && styles.listTogglerActive,
						].join(' ')}
						onClick={() =>
							this.setState({
								showTopics: !this.state.showTopics,
							})
						}
					>
						V
					</div>
					<ul
						className={[
							styles.options,
							!this.state.showTopics && styles.optionsHidden,
						].join(' ')}
					>
						{Object.keys(data.topics).map(topic => (
							<Translate key={topic}>
								{({ translate }) => (
									<li
										onClick={this.changeTopic}
										type="text"
										topic={topic}
									>
										{translate(`topics.${topic}`)}
									</li>
								)}
							</Translate>
						))}
						{productsOptions}
					</ul>
				</div>
			);
		} else if (this.props.type === 'textarea') {
			return (
				<textarea
					className={[styles.input, styles.message].join(' ')}
					placeholder={this.props.placeholder}
					onChange={e =>
						this.props.handleChange(e, this.props.inputName)
					}
					style={setStyle()}
					ref={ref => (this.inputsArr[this.props.inputName] = ref)}
					onFocus={() => this.scrollToElement(this.props.inputName)}
					value={this.props.value}
				/>
			);
		} else {
			return (
				<input
					className={styles.input}
					type={this.props.type}
					placeholder={this.props.placeholder}
					onChange={e =>
						this.props.handleChange(e, this.props.inputName)
					}
					style={setStyle()}
					ref={ref => (this.inputsArr[this.props.inputName] = ref)}
					onFocus={() => this.scrollToElement(this.props.inputName)}
					value={this.props.value}
				/>
			);
		}
	}
}
export default withLocalize(TextInput);
