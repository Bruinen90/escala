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
import Policy from '../../components/Policy/Policy';

import productsData from '../../data/products';

class App extends Component {
    state={
        showPrivatePolicy: false,
        showCookies: false,
    }
    togglePrivatePolicy = () => {
        this.setState({showPrivatePolicy: !this.state.showPrivatePolicy})
    }
    toggleCookies = () => {
        this.setState({showCookies: !this.state.showCookies})
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
        <Nav/>
        <section className={styles.mainContainer}>
            <Policy
                close={this.togglePrivatePolicy}
                show={this.state.showPrivatePolicy}
                header='Polityka'
                type='privacy'
            >
            </Policy>
            <Policy
                close={this.toggleCookies}
                show={this.state.showCookies}
                header='Cookies'
                type='cookies'
            >
            </Policy>
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
        <Footer
            clickShowPrivace={this.togglePrivatePolicy}
            clickShowCookies={this.toggleCookies}
        />
      </div>
    );
  }
}

export default App;
