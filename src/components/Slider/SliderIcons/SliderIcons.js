import React from 'react';
import styles from './SliderIcons.module.css';
import SliderIcon from './SliderIcon/SliderIcon';

const SliderIcons = (props) => {
    const allIcons = [];
    for(let i=0; i<props.count; i++) {
        allIcons.push(
            <SliderIcon
                key={i}
                active={props.active === i}
                clicked={()=>props.clickedIcon(i)}
            />
        )
    }
    return(
    <div className={styles.icons}>
        {allIcons}
    </div>
);}
export default SliderIcons;
