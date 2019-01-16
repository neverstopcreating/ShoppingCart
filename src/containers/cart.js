import React from 'react';
import "./cart.css";
import Product from "../components/product";


function Cart(props) {
    console.log('In the cart component', props.products, props.cart);

    let total = 0;

    props.products.forEach(p => {
        let countOfProductInCart = props.cart[p.id] || 0;
        console.log(p, p.price, countOfProductInCart);

        total = total + (p.price * countOfProductInCart);
    });



 function checker(props) {
     let a = [];
     if (props.cart === 0) {
let productsToShow =
     }
 }





    return (
        <div className="cart">
            <div className='products-in-cart'></div>
            <span>Total {total.toFixed(2)} </span>
        </div>
    )
}

export default Cart;