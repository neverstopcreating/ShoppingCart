import React from 'react';
import Counter from "./counter";
import "./product.css";
import {setProductCount} from "../actions";
import connect from "react-redux/es/connect/connect";

function Product({setProductCount, product, count}) {
    return (
        <div className="product">
            <span>{product.id} - {product.name}</span>
            <Counter
                count={count}
                increment={() => setProductCount(product.id, count + 1)}
                decrement={() => setProductCount(product.id, count - 1)}
            />
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    console.log(ownProps, state);
    return {
        product: ownProps.product,
        count: state.cart[ownProps.product.id] || 0
    };
}

const mapDispatchToProps = {setProductCount};

export default connect(mapStateToProps, mapDispatchToProps)(Product);