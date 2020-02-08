import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const [ query, setQuery ] = useState("");

    const onChangeQuery = (event) => {
        setQuery(event.target.value);
    };

    return(
        <header className="nav navbar bg-dark vw-100">
        <Link to="/"><div className="nav-item text-white">Best Buy-azon</div></Link>
        <div className="btn-group">
          <button className="btn btn-secondary" type="button">Item Classes</button>
          <input type="text" className="btn bg-white w-auto form-control text-left" name="query" onChange={onChangeQuery} value={query}/>
          <button className="btn btn-warning">Search</button>
        </div>
        <button className="btn btn-warning">Login</button>
        <Link to="/cart"><button className="btn btn-warning">Cart</button></Link>
      </header>
    );
};

export default Navbar;