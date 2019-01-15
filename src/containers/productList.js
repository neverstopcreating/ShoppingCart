import React from 'react';
import './productList.css';
import Product from "../components/product";


function ProductList(props) {
    return (
        <div className="productList">

{/*Loop that makes a list out of the products.Without it , it would show only 1*/}

            {props.products.map(p => <Product key={p.id} product={p} />)}
        </div>
    )
}

export default ProductList;
