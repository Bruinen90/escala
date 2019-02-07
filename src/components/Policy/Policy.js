import React from 'react';
import styles from './Policy.module.css';
import PolicyCont from '../../containers/PolicyCont/PolicyCont';

const Policy = (props) => {
    const cookies = <h2>Coookies!</h2>
    const privacy = <h2>Privacy</h2>
    return(
        <PolicyCont
            header={props.header}
            show={props.show}
            clickClose={props.close}
        >
            {props.type==='cookies' ? cookies : privacy}
        </PolicyCont>
    );
};
export default Policy;
