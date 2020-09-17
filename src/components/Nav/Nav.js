import React, { Component } from 'react';
import styles from './Nav.module.css';
import NavItem from './NavItem/NavItem';
import Cover from '../Cover/Cover.js';
import { Translate, withLocalize } from 'react-localize-redux';
import data from './data.json';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
			trans: false,
			touchStartPoint: 0,
			touchEndPoint: 0,
			touchMoveX: 0,
		};
		this.props.addTranslation(data);
	}
	toggleMenuHandler = () => {
		this.setState({ showMenu: !this.state.showMenu, trans: true });
	};
	touchStartHandler = e => {
		this.setState({ touchStartPoint: e.touches[0].clientX, trans: false });
	};

	touchMoveHandler = e => {
		this.setState({
			touchMoveX: e.touches[0].clientX - this.state.touchStartPoint,
		});
	};

	touchEndHandler = e => {
		if (this.state.touchMoveX > 30 && !this.state.showMenu) {
			this.toggleMenuHandler();
		}
		if (this.state.touchMoveX < -30 && this.state.showMenu) {
			this.toggleMenuHandler();
		}
		this.setState({ touchMoveX: 0 });
	};
	render() {
		let navTrans;
		if (this.state.trans) {
			navTrans = 'all .5s ease-in-out';
		} else {
			navTrans = null;
		}
		let navPos = `translateX(calc(-90% + ${this.state.touchMoveX}px))`;
		if (this.state.showMenu) {
			navPos = `translateX(${this.state.touchMoveX}px)`;
			if (this.state.touchMoveX > 0) {
				navPos = 'translateX(0px)';
			}
		}
		let navStyle = {
			transform: navPos,
			transition: navTrans,
			height: window.innerHeight + 'px',
		};
		let togglerStyle;
		let coverStyle = {
			display: 'none',
		};
		if (this.state.showMenu) {
			togglerStyle = {
				opacity: '0',
				cursor: 'auto',
			};
			coverStyle = {
				display: 'block',
			};
		}

		const navItems = Object.entries(data.navItems).map(
			([item, info], index) => {
				return (
					<NavItem
						number={index + 1}
						text={<Translate id={`navItems.${item}.fullName`} />}
						target={info.target}
						exact={info.exact}
						key={item}
						clicked={this.toggleMenuHandler}
					/>
				);
			}
		);
		return (
			<div>
				<div
					className={[
						styles.container,
						this.state.showMenu ? styles.show : styles.hidden,
					].join(' ')}
					style={navStyle}
					onTouchStart={this.touchStartHandler}
					onTouchEnd={this.touchEndHandler}
					onTouchMove={this.touchMoveHandler}
				>
					<div
						className={styles.toggler}
						style={togglerStyle}
						onClick={this.toggleMenuHandler}
					>
						<div className={styles.toggleIcon}>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
					{/* <div className={styles.header}>menu _</div> */}
					<div className={styles.navItems}>{navItems}</div>
					<div className={styles.langs}>
						{this.props.languages.map(lang => (
							<div
								key={lang.code}
								className={[
									styles.lang,
									this.props.activeLanguage.code ===
										lang.code && styles.langActive,
								].join(' ')}
								onClick={() =>
									this.props.setActiveLanguage(lang.code)
								}
							>
								{lang.code}
							</div>
						))}
						{/* <img src={require('../../img/icons/pl_flag.svg')} alt="Język polski" className={styles.langIcon}/>
                  <img src={require('../../img/icons/eng_flag.svg')} alt="English language" className={styles.langIcon}/> */}
					</div>
				</div>
				<Cover
					toggleMenu={this.toggleMenuHandler}
					style={coverStyle}
					touchStart={this.touchStartHandler}
					touchEnd={this.touchEndHandler}
					touchMove={this.touchMoveHandler}
				/>
			</div>
		);
	}
}
export default withLocalize(Nav);
