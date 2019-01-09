import React from 'react';
import Counter from "./counter";
import "./product.css";

function Product(props) {
    return (
        <div className="product">
            <span>{props.product.id} - {props.product.name}</span>
            <Counter initialValue={1}/>
        </div>
    )

}

export default Product;