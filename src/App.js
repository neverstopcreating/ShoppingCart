import React, {Component} from 'react';
import './App.css';
import ProductList from "./components/productList";
import Cart from "./components/cart";

const products =Array( 5)
    .fill('')
    .map((_, index) => ({id: index, name: `Item ${index}`, count: 0, price: index * 10}));


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Cart">
                    <Cart products={products}/>
                </div>
                <ProductList products={products}/>
            </div>
        );
    }
}

export default App;
