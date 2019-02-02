import React from 'react';
import styles from './Slide.module.css';
import slide0 from '../../../img/slides/slide_0.jpg';
import slide1 from '../../../img/slides/slide_1.jpg';
import slide2 from '../../../img/slides/slide_2.jpg';
import slide3 from '../../../img/slides/slide_3.jpg';
import slide4 from '../../../img/slides/slide_4.jpg';

const Slide = (props) => {
    const allSlides = [slide0, slide1, slide2, slide3, slide4];
    const slideStyle = {backgroundImage: `url(${allSlides[props.image]})`}
    props.show ? slideStyle.opacity = '1' : slideStyle.opacity = '0';
    return(
        <div
            className={styles.container}
            style={slideStyle}
        >
        </div>
)};
export default Slide;
