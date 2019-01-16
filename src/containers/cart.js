import React from 'react';
import "./cart.css";


function Cart(props) {

    let total = 0;

    props.products.forEach(p => {
        let countOfProductInCart = props.cart[p.id] || 0;
        console.log(p, p.price, countOfProductInCart);

        total = total + (p.price * countOfProductInCart);
    });

    const productList = Object.keys(props.cart).map((productId) => {
        const product = props.products.find((p) => p.id === productId);
        const countOfProductInCart = props.cart[productId];
        const productTotal = product.price * countOfProductInCart;
        // if product is not in cart,it disappears
        if (!countOfProductInCart) {
            return null;
        }
        return <div key={productId}>{product.name} - {productTotal.toFixed(2)}</div>;
    });

    return (
        <div className="cart">
            <div className='products-in-cart'>{productList}</div>
            <span><b>Total {total.toFixed(2)} </b></span>
        </div>
    )
}

export default Cart;