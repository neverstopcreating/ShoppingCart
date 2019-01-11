import React from 'react';
import './productList.css';
import Product from "../components/product";


function ProductList(props) {
    return (
        <div className="productList">
            {props.products.map(p => <Product key={p.id} product={p} />)}
        </div>
    )
}

export default ProductList;
