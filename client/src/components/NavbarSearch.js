import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarSearch extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.state = { query: "" };

        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.onClickQuery = this.onClickQuery.bind(this);
    }

    onChangeQuery = (event) => {
        this.setState({query : event.target.value});
        //this.props.setQuery(event.target.value);
    };

    onClickQuery = (event) => {
        this.props.setQuery(this.state.query);
    }

    render() {
        let query;
        if (typeof this.props.query === 'string' && typeof this.props.setQuery === 'function') {
            query = (<div className="btn-group w-75">
                <button className="btn btn-secondary" type="button"></button>
                <input type="text" className="btn bg-white w-auto form-control text-left" name="query" onChange={this.onChangeQuery} value={this.state.query} />
                <button className="btn btn-warning" onClick={this.onClickQuery}>Search</button>
            </div>);
        }
        else {
            query = (<></>);
        }

        let login;
        if (typeof this.props.token === 'string' && typeof this.props.setToken === 'function') {
            if (this.props.token.length !== 0) {
                login = (
                    <>
                        <button className="btn btn-warning" onClick={() => this.props.setToken("")}>Logout</button>
                    </>
                );
            }
            else {
                login = (
                    <>
                        <Link to="/login"><button className="btn btn-warning">Login</button></Link>
                    </>
                );
            }
        }
        else {
            login = (<></>);
        }
        let cart;
        if (typeof this.props.cart === 'object' && this.props.cart !== null && Object.keys(this.props.cart).length !== 0) {
            cart = (
                <>
                    <Link to="/cart"><button className="btn btn-warning">Cart</button></Link>
                </>
            );
        }
        else {
            cart = (<></>);
        }

        return (
            <header className="nav navbar bg-dark vw-100">
                <div className="col-2">
                    <Link to="/"><div className="nav-item text-white">Best Buy-azon</div></Link>
                </div>
                <div className=" col-8">
                    {query}
                </div>
                <div className="col-1">
                    {login}
                </div>
                <div className="col-1">
                    {cart}
                </div>
            </header>
        );
    }
};

export default NavbarSearch;