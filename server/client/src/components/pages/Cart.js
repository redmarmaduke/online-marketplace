import React from 'react';
import CartList from '../CartList';
import Format from '../../util/Format';

const Cart = (props) => {
    var sum = 0;
    console.log(props.cart);
    for (const sku in props.cart) {
        console.log(sku);
        sum += props.cart[sku].product.salePrice * props.cart[sku].count;
    }
    let currency= Format.currency(sum);
    
    return (
        <div className="row d-flex flex-row">
            <div className="col-10">
                <CartList {...props}/>
            </div>
            <div className="col-2">
                <div>{currency}</div>
            </div>
        </div>
    );
};

export default Cart;