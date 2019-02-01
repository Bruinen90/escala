import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import styles from './App.module.css';
import Nav from '../../components/Nav/Nav.js';

import Home from '../Home/Home.js';
import Products from '../Products/Products.js';
import Info from '../Info/Info.js';
import Cooperation from '../Cooperation/Cooperation.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';

class App extends Component {
    state = {
        showMenu: false,
    }
    toggleMenuHandler = () => {
        this.setState({showMenu: !this.state.showMenu})
    }
  render() {
    return (
      <div className="App">
        <Nav
            showMenu = {this.state.showMenu}
            toggleMenu = {this.toggleMenuHandler}
        />
        <section className={styles.mainContainer}>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/products' component={Products} />
                <Route path='/info' component={Info} />
                <Route path='/cooperation' component={Cooperation} />
                <Route path='/about' component={About} />
                <Route path='/Contact' component={Contact} />
            </Switch>
        </section>
      </div>
    );
  }
}

export default App;
