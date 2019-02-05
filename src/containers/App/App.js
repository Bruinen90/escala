import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import styles from './App.module.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Product from '../Product/Product';

import Home from '../Home/Home';
import Products from '../Products/Products';
import Info from '../Info/Info';
import Cooperation from '../Cooperation/Cooperation';
import About from '../About/About';
import Contact from '../Contact/Contact';

import productsData from '../../data/products';

class App extends Component {
    state = {
        showMenu: false,
    }
    toggleMenuHandler = () => {
        this.setState({showMenu: !this.state.showMenu})
    }
  render() {
      const allProducts = [];
      for(let i = 1; i<productsData.length+1; i++) {
          allProducts.push(
              <Route path={`/products/product_${i}`} key={i}>
                <Product
                    index = {i}
                />
              </Route>
          )
      }
    return (
      <div className="App">
        <Nav
            showMenu = {this.state.showMenu}
            toggleMenu = {this.toggleMenuHandler}
        />
        <section className={styles.mainContainer}>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/products' exact component={Products} />
                <Route path='/info' component={Info} />
                <Route path='/cooperation' component={Cooperation} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                {allProducts}
            </Switch>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
