import React, { useState } from 'react';
import API from '../../util/API';

const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        API.createAccount(email, password).then((result) => {
            API.loginAccount(email, password).then((result) => {
                props.setToken(result.data.token);
                window.history.go(-2);
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    let style = {
        width: "400px"
    };

    return (
        <div className="d-flex justify-content-center">
            <form className="d-flex row flex-column" style={style} onSubmit={onSubmit}>
                <label><strong>E-Mail:</strong></label>
                <input id="email" type="text" onChange={(event) => setEmail(event.target.value)} name="email" />
                <br />
                <label><strong>Password:</strong></label>
                <input id="password" type="password" onChange={(event) => setPassword(event.target.value)} name="password" />
                <br />
                <input type="submit" className="btn btn-warning" value="Create Account" />
            </form>
        </div>
    );
};

export default SignUp;