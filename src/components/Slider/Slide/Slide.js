import React from 'react';
import styles from './Slide.module.css';
import slide1 from '../../../img/slides/1.jpg';
import slide2 from '../../../img/slides/2.jpg';
import slide3 from '../../../img/slides/3.jpg';
import slide4 from '../../../img/slides/4.jpg';
import slide5 from '../../../img/slides/5.jpg';
import slide6 from '../../../img/slides/6.jpg';


const Slide = (props) => {
    const allSlides = [slide1, slide2, slide3, slide4, slide5, slide6];
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
