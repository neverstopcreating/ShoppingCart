import React from 'react';
import "./cart.css";


function Cart(props) {
    console.log('In the cart component', props.products, props.cart);

    let total = 0;

    props.products.forEach(p => {
        let countOfProductInCart = props.cart[p.id] || 0;
        console.log(p, p.price, countOfProductInCart);

        total = total + (p.price * countOfProductInCart);
    });

    console.log('total', total);



    return (
        <div className="cart">
            <span>Total {total.toFixed(2)} </span>
        </div>
    )
}

export default Cart;