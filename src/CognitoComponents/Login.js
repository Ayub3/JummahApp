import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        });
        const authDetail = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        user.authenticateUser(authDetail, {
            onSuccess: (data) => {
                console.log('OnSuccess: ', data);
            },
            onFailure: (error) => {
                console.error('Onfailure: ', error);
            },
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
