import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import styles from './App.module.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

import Home from '../Home/Home';
import Products from '../Products/Products';
import Info from '../Info/Info';
import Cooperation from '../Cooperation/Cooperation';
import About from '../About/About';
import Contact from '../Contact/Contact';

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
        <Footer />
      </div>
    );
  }
}

export default App;
