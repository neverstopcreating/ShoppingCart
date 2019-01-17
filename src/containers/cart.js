import React from 'react';
import "./cart.css";
import {setProductCount} from "../actions";
import connect from "react-redux/es/connect/connect";


function Cart(props) {

    let total = 0;

    props.products.forEach(p => {
        let countOfProductInCart = props.cart[p.id] || 0;
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
        return <div key={productId}>


            <button
                onClick={() => props.setProductCount(product.id, 0)}>x
            </button>

            <span>{product.name} - {productTotal.toFixed(2)}</span>
        </div>;
    });

    return (
        <div className="cart">
            <div className='products-in-cart'>{productList}</div>
            <span><b>Total {total.toFixed(2)} </b></span>
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        product: ownProps.product,
        count: state.cart
    };
}

const mapDispatchToProps = {setProductCount};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
