import React, { Component } from 'react';
import styles from './TopHeader.module.css';
import Logo from '../Logo/Logo';
import SocialIcons from '../SocialIcons/SocialIcons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class TopHeader extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    render() {
        return(
            <div className={styles.container}>
                <h1
                    className={styles.header}
                    onClick={this.props.headerGoesBack && this.context.router.history.goBack}
                    style={{
                        cursor: this.props.headerGoesBack ? 'pointer' : 'auto',
                    }}
                >
                    <span className={styles.number}>{this.props.number}</span>
                    {this.props.title}
                </h1>
                <div className={styles.logoCont}>
                    <Link to='/'>
                        <Logo
                            black={!this.props.white}
                        />
                    </Link>
                </div>
                <SocialIcons
                    black={!this.props.white}
                />
            </div>
        )
    }
}
export default TopHeader;
