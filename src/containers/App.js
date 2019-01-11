import React, {Component} from 'react';
import {connect} from "react-redux";

import './App.css';
import ProductList from "../containers/productList";
import Cart from "../containers/cart";


// const products = Array(5)
//     .fill('')
//     .map((_, index) => ({id: index, name: `Item ${index}`, count: 0, price: index * 10}));


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Cart">
                    <Cart products={this.props.products}/>
                </div>
                <ProductList products={this.props.products}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(App);
