import React, { Component } from 'react';
import styles from './Product.module.css';
import { Translate, withLocalize } from 'react-localize-redux';

import SubPage from '../SubPage/SubPage';
import Gallery from '../../components/Gallery/Gallery';
import Button from '../../components/Button/Button';
import GoBack from '../../components/GoBack/GoBack';
import ColoursSlider from '../../components/ColoursSlider/ColoursSlider';

import data from '../../data/productsData.json';

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showLigthbox: false,
		};
		this.props.addTranslation(data);
	}
	render() {
		let enlargeIcon = data.data[this.props.keyName].blackGalleryIcon
			? 'enlarge_black'
			: 'enlarge';
		const imagesCount = data.data[this.props.keyName].imagesCount;
		const imagesList = [];
		for (let i = 1; i <= imagesCount; i++) {
			imagesList.push(i);
		}
		const imgFolderPath = `products/${this.props.keyName}`;
		const bigImg = require(`../../img/products/${this.props.keyName}/${imagesCount}.jpg`);

		return (
			<React.Fragment>
				{this.state.showLigthbox ? (
					<div className={styles.lightbox}>
						<div
							className={styles.cover}
							onClick={() =>
								this.setState({ showLigthbox: false })
							}
						></div>
						<Gallery
							imgFolderPath={imgFolderPath}
							imagesList={imagesList}
							smallImagesList={
								data.data[this.props.keyName].smallImagesList
							}
							mediumImagesList={
								data.data[this.props.keyName].mediumImagesList
							}
							clickClose={() =>
								this.setState({ showLigthbox: false })
							}
							visible={this.state.showLigthbox}
						/>
					</div>
				) : null}

				<SubPage
					title={<Translate id='title' />}
					number='02'
					headerGoesBack={true}
					noGoBack={true}
				>
					<div className={styles.grid}>
						<div className={styles.description}>
							<h2 className={styles.name}>
								{data.data[this.props.keyName].name}
							</h2>
							<div className={styles.text}>
								<Translate
									id={`data.${this.props.keyName}.description`}
								/>
								<p>
									{data.data[this.props.keyName].warning && (
										<Translate
											id={`data.${this.props.keyName}.warning`}
										/>
									)}
								</p>
							</div>
							<div className={styles.buttons}>
								<Button
									click={() =>
										this.setState({ showLigthbox: true })
									}
								>
									<Translate id='properties.gallery' />
								</Button>
								<Button
									target='/contact'
									productName={
										data.data[this.props.keyName].name
									}
									question='price'
								>
									<Translate id='properties.ask-for-price' />
								</Button>
								<Button
									target='/contact'
									productName={
										data.data[this.props.keyName].name
									}
									question='3dmodel'
								>
									<Translate id='properties.3dmodel' />
								</Button>
							</div>
						</div>
						<div
							className={[
								styles.galleryCont,
								data.data[this.props.keyName].moveUp &&
									styles.moveUp,
							].join(' ')}
							onClick={() =>
								this.setState({ showLigthbox: true })
							}
							// For big, square furniture
							style={
								this.props.index === 9
									? {
											padding: '30px 60px',
									  }
									: {}
							}
						>
							<img
								src={require(`../../img/products/${this.props.keyName}/1.jpg`)}
								alt=''
								className={styles.galleryImg}
							/>
							<img
								src={require(`../../img/icons/${enlargeIcon}.svg`)}
								alt='Powiększ zdjecie'
								className={styles.enlargeIcon}
							/>
						</div>
						<div className={styles.info}>
							<h3 className={styles.techHeader}>
								<Translate id='properties.techinfo' />
							</h3>
							<div className={styles.size}>
								<h4>
									<Translate id='properties.diameters' />
								</h4>
								<Translate id='properties.width' />:{' '}
								{data.data[this.props.keyName].diameters.width}{' '}
								mm <br />
								<Translate id='properties.depth' />:{' '}
								{data.data[this.props.keyName].diameters.depth}{' '}
								mm <br />
								<Translate id='properties.height' />:{' '}
								{data.data[this.props.keyName].diameters.height}{' '}
								mm <br />
							</div>
							<div className={styles.size}>
								<h4>
									<Translate id='properties.materials' />
								</h4>
								<Translate id='properties.carcass' /> -{' '}
								{
									<Translate
										id={`data.${this.props.keyName}.materials.body`}
									/>
								}{' '}
								<br />
								<Translate id='properties.frame' /> -{' '}
								<Translate
									id={`data.${this.props.keyName}.materials.frame`}
								/>{' '}
								<br />
							</div>
							<div className={styles.size}>
								<h4>
									<Translate id='properties.finishes' />
								</h4>
								<div>
									{data.data[this.props.keyName].finish
										.metal && (
										<>
											<Translate id='properties.metal' />
											<span> - </span>
										</>
									)}
									{data.data[this.props.keyName].finish
										.metal && (
										<Translate
											id={`data.${this.props.keyName}.finish.metal`}
										/>
									)}
								</div>
								<div>
									{data.data[this.props.keyName].finish
										.lakierAkrylowy && (
										<Translate
											id={`data.${this.props.keyName}.finish.lakierAkrylowy`}
										/>
									)}
								</div>
								<div>
									<Translate
										id={`data.${this.props.keyName}.finish.other`}
									/>
								</div>
							</div>
							<div className={styles.size}>
								{data.data[this.props.keyName].colours.metal
									.length > 2 ? (
									<React.Fragment>
										<h4>
											<Translate id='properties.available-finishes' />
										</h4>
										<h5>
											<Translate id='properties.metals' />
										</h5>
									</React.Fragment>
								) : (
									<br />
								)}
								{data.data[this.props.keyName].colours
									.metal && (
									<div className={styles.colours}>
										<ColoursSlider
											coloursList={
												data.data[this.props.keyName]
													.colours.metal
											}
											imgFolderPath={'metals'}
										/>
									</div>
								)}
								{data.data[this.props.keyName].colours
									.acryl && (
									<React.Fragment>
										<h5>
											<Translate id='properties.acrylic' />
										</h5>
										{/* <div className={styles.colours}>
                      <ColoursSlider
                        coloursList={
                          data.data[this.props.keyName].colours.acryl
                        }
                        imgFolderPath={'varnishes'}
                      />
                    </div> */}
									</React.Fragment>
								)}
							</div>
							{data.data[this.props.keyName].colours.metal
								.length < 3 && (
								<div className={styles.placeHolder}></div>
							)}
							<GoBack left={true} />
						</div>
						<div
							className={styles.bigImgCont}
							style={{
								backgroundImage: `url(${bigImg})`,
							}}
						></div>
					</div>
				</SubPage>
			</React.Fragment>
		);
	}
}
export default withLocalize(Product);
