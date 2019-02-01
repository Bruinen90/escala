import React, { Component } from 'react';
import styles from './Nav.module.css';
import NavItem from './NavItem/NavItem';
import Cover from '../Cover/Cover.js';

class Nav extends Component {
  render() {
       let menuStyle = {
           transform: 'translateX(-90%)',
       }
       let togglerStyle;
       let coverStyle = {
           display: 'none'
       };
       if(this.props.showMenu) {
           menuStyle = null;
           togglerStyle = {
               opacity: '0',
               cursor: 'auto',
           }
           coverStyle = {
               display: 'block',
           }
       }

       let navItems = [
           {fullName: 'Home', target: '/home'},
           {fullName: 'Produkty', target: '/products'},
           {fullName: 'Info', target: '/info'},
           {fullName: 'Współpraca', target: '/cooperation'},
           {fullName: 'O nas', target: '/about'},
           {fullName: 'Kontakt', target: '/contact'},
       ];
       navItems = navItems.map((item, index) => {
           return (
               <NavItem
                   number={index+1}
                   text={item.fullName}
                   target={item.target}
                   key={item.fullName}
               />
           )
       })
    return (
        <div>
            <div className={styles.container} style={menuStyle} onClick={this.props.toggleMenu}>
              <div className={styles.toggler} style={togglerStyle}>menu _</div>
              <div className={styles.header}>menu _</div>
              <div className={styles.navItems}>
                  {navItems}
              </div>
            </div>
            <Cover
                toggleMenu={this.props.toggleMenu}
                style={coverStyle}
            />
        </div>
    );
  }
}
export default Nav;
