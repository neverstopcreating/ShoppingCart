import React from 'react';
import Counter from "./counter";
import "./product.css";
import {setProductCount} from "../actions";
import connect from "react-redux/es/connect/connect";

function Product({setProductCount, product, count}) {
    return (
        <div className="product">
            <img src={product.picture} alt={product.name} width="100" height="90"/>
            <span>{product.id} - {product.price}£</span>
            <Counter
                count={count}
                increment={() => setProductCount(product.id, count + 1)}
                decrement={() => setProductCount(product.id, count - 1)}
            />
            <span>Total {(count * product.price).toFixed(2)}£</span>
        </div>
    )
}

// connects new state with the props
function mapStateToProps(state, ownProps) {
    return {
        product: ownProps.product,
        count: state.cart[ownProps.product.id] || 0
    };
}

// describes and action of what needs to be connected to what
const mapDispatchToProps = {setProductCount};

// shows things that need to be done and what with it needs to be done
export default connect(mapStateToProps, mapDispatchToProps)(Product);