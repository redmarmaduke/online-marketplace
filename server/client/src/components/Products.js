import API from '../util/API';
import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = { products: [] };
        this.props = props;    
        this.q = props.query ? props.query : "";
    }

    componentDidMount = () => {
        let that = this;
        API.getProducts(this.q).then(function (result) {
            // if didmount is after render why use setState?
            that.setState({ products: result.data });
        }).catch((error) => console.log(error));
    }

    render() {
        let cards = [];
        let style = {
            card: {
                width: "300px"
            },
            img: {
                height: "200px"
            }
        };

        let products = this.state.products;

        for (let el of products) {
            cards.push(
                <div nameClass="card border-1 border-dark" style={style.card}>
                    <div style={style.img}>
                        <img src={el.mediumImage} nameClass="card-img-top img-fluid" alt="..." />
                    </div>
                    <div nameClass="card-body">
                        <p nameClass="card-text">{el.name}</p>
                        <p nameClass="card-text">{el.customerReviewAverage}</p>
                        <p nameClass="card-text">{el.salePrice}</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="containter justify-content-center row">
                <div className="col-1"/>
                <div className="col-10">
                    <div className="d-flex flex-wrap">
                        {cards}
                    </div>
                </div>
                <div className="col-1"/>
            </div>
        );
    }
};

export default Products;