import React, { Component } from 'react';
import styles from './Nav.module.css';
import NavItem from './NavItem/NavItem';
import Cover from '../Cover/Cover.js';

class Nav extends Component {
    state = {
        showMenu: false,
        trans: false,
        touchStartPoint: 0,
        touchEndPoint: 0,
        touchMoveX: 0,
    }
    toggleMenuHandler = () => {
        this.setState({showMenu: !this.state.showMenu, trans: true})
    }
    touchStartHandler = (e) => {
        this.setState({touchStartPoint: e.touches[0].clientX, trans: false})
    }

    touchMoveHandler = (e) => {
        this.setState({touchMoveX: e.touches[0].clientX - this.state.touchStartPoint});
    }

    touchEndHandler = (e) => {
        if(this.state.touchMoveX > 30 && !this.state.showMenu) {
            this.toggleMenuHandler();
        }
        if(this.state.touchMoveX < -30 && this.state.showMenu) {
            this.toggleMenuHandler();
        }
        this.setState({touchMoveX: 0});
    }

  render() {
      let navTrans;
      if(this.state.trans) { navTrans = 'all .5s ease-in-out' } else { navTrans = null };
      let navPos = `translateX(calc(-90% + ${this.state.touchMoveX}px))`;
      if(this.state.showMenu) {
          navPos = `translateX(${this.state.touchMoveX}px)`;
          if(this.state.touchMoveX > 0) {
              navPos = 'translateX(0px)';
          }
      }
      let navStyle = {
          transform: navPos,
          transition: navTrans,
      }
       let togglerStyle;
       let coverStyle = {
           display: 'none'
       };
       if(this.state.showMenu) {
           togglerStyle = {
               opacity: '0',
               cursor: 'auto',
           }
           coverStyle = {
               display: 'block',
           }
       }

       let navItems = [
           {fullName: 'Home', target: '/', exact: true},
           {fullName: 'Produkty', target: '/products'},
           {fullName: 'O nas', target: '/about'},
           {fullName: 'Współpraca', target: '/cooperation'},
           {fullName: 'Info', target: '/info'},
           {fullName: 'Kontakt', target: '/contact'},
       ];
       navItems = navItems.map((item, index) => {
           return (
               <NavItem
                   number={index+1}
                   text={item.fullName}
                   target={item.target}
                   key={item.fullName}
                   exact={item.exact}
               />
           )
       })
    return (
        <div>
            <div
                className={[styles.container, this.state.showMenu ? styles.show : styles.hidden].join(' ')}
                style={navStyle}
                onClick={this.toggleMenuHandler}
                onTouchStart={this.touchStartHandler}
                onTouchEnd={this.touchEndHandler}
                onTouchMove={this.touchMoveHandler}
            >
              <div className={styles.toggler} style={togglerStyle}>
                  <div className={styles.toggleIcon}>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
              </div>
              {/* <div className={styles.header}>menu _</div> */}
              <div className={styles.navItems}>
                  {navItems}
              </div>
              <div className={styles.langs}>
                  <div className={[styles.lang, styles.langActive].join(' ')}>PL</div>
                  <div className={styles.lang}>EN</div>
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
export default Nav;
