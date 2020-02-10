import React from 'react';
import Products from '../Products';

const Home = (props) => {
    return (
        <div>
            <Products {...props}/>
        </div>
    );
};

export default Home;