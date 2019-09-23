import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { withLocalize } from 'react-localize-redux';
import { renderToStaticMarkup } from 'react-dom/server';

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
// import Policy from '../../components/Policy/Policy';
import PolicyWarning from '../../components/PolicyWarning/PolicyWarning';

// import productsData from '../../data/products';
import productsData from '../../data/productsData.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.props.initialize({
            languages: [
                { name: 'Polski', code: 'pl'},
                { name: 'English', code: 'en'},
            ],
            options: { renderToStaticMarkup }
        })

        this.state = {
            showWarning: true,
        }
    }
  render() {
      const allProducts = Object.entries(productsData.data).map(([keyName, info], i) => {
          return(
              <Route path={`/products/product_${i+1}`} key={keyName}>
                <Product
                    index = {i+1}
                    keyName={keyName}
                />
              </Route>
          )
      })
    return (
      <div className="App">
        <Nav/>
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
        <Footer
            clickShowPrivace={()=>this.togglePolicy('privace')}
            clickShowCookies={()=>this.togglePolicy('cookies')}
        />
        {
            this.state.showWarning &&
            <PolicyWarning
                clickClose = {()=>this.setState({showWarning: false})}
            />
        }
      </div>
    );
  }
}

export default withLocalize(App);
