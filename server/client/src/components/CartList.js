import React, { Component } from 'react';
import NumberInput from './NumberInput';

class CartList extends Component {
    constructor(props) {
        super(props);

        this.onClickDelete = this.onClickDelete.bind(this);
        this.setProductCount = this.setProductCount.bind(this);

        this.props = props;
    }

    onClickDelete(event) {
        this.setProductCount(event.target.value,0);
    }

    setProductCount(key,value) {
        let cart = {
            ...this.props.cart,
        };
        value = parseInt(value);

        if (value === 0) {
            console.log("Value is 0");
            delete cart[key];    
        }
        else {
            cart[key].count = value;
        }
        console.log("Product:",cart);
        this.props.setCart(cart);
    }

    render() {
        let style = {
            card: {
                width: "80%"
            },
            imgContainer: {
                height: 150
            },
            img: {
                width: "auto",
                height: "auto"
            }
        };

        const cart = this.props.cart;
        let list = Object.keys(cart).map((sku, i) => {
            return (
                <div key={i} className="container">
                    <div className="card list-item flex-row" style={style.card}>
                        <div style={style.imgContainer}>
                            <img className="img" style={style.img} src={cart[sku].product.mediumImage} alt="Product" />
                        </div>
                        <div className="card-body flex-col">
                            <h5 className="card-title">{cart[sku].product.name}</h5>
                            <p className="cart-text">{cart[sku].product.shortDescription}</p>
                            <p>${cart[sku].product.salePrice}</p>
                            <button className="btn btn-primary" value={sku} onClick={this.onClickDelete}>Delete</button>
                            <NumberInput identifier={sku} value={cart[sku].count} setValue={this.setProductCount}/>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="list-group">
                {list}
            </div>
        );
    }
}

export default CartList;