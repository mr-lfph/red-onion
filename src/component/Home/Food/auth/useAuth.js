import React from 'react'
import { useState } from 'react'
import { createContext } from 'react';

let UserContext = null;
const { Provider, Consumer } = UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    return (
        <Provider value={
            {
                user,
                cart
            }}>
            {props.children}
        </Provider>
    )
}

export { UserProvider,Consumer as UserConsumer,  UserContext }
