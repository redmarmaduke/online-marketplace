import API from '../util/API';
import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = { products: [] };
        this.props = props;

        this.onClickAddToCart = this.onClickAddToCart.bind(this);
    }

    getProducts() {
        let query = this.props.query || "";
        let that = this;
        API.getProducts(query).then(function (result) {
            // if didmount is after render why use setState?
            that.setState({ products: result.data });
        }).catch((error) => console.log(error));
    }

    componentDidMount = () => {
        this.getProducts();
    }

    componentDidUpdate = () => {
        this.getProducts();
    }

    onClickAddToCart(obj) {
        let sku = obj.sku;

        let count = (this.props.cart[sku] ? this.props.cart[sku].count : undefined) || 0;
        let update = {
            [sku]: {
                count: ++count,
                product: obj
            }
        };
        this.props.setCart({ ...this.props.cart, ...update });
        console.log(this.props.cart);
    }

    render() {
        let style = {
            card: {
                width: "300px"
            },
            imgContainer: {
                height: "150px"
            },
            img: {
                width: "auto",
                height: "auto"
            }
        };

        //this.getProducts();

        let products = this.state.products;
        console.log(products);
        return (
            <div className="containter justify-content-center row">
                <div className="col-1" />
                <div className="col-10">
                    <div className="d-flex flex-wrap">
                        {
                            products.map((product, i) => {
                                return (
                                    <div key={i} className="card border-1 border-dark" style={style.card}>
                                        <div style={style.imgContainer}>
                                            <img src={product.mediumImage} style={style.img} className="card-img-top" alt="..." />
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <p className="card-text">{product.name}</p>
                                            <div>
                                                <p className="card-text">{product.customerReviewAverage}</p>
                                                <p className="card-text">${product.salePrice}</p>
                                                <button type="button" className="btn btn-warning" key={i} onClick={(e) => this.onClickAddToCart(product)}>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="col-1" />
            </div>
        );
    }
};

export default Products;