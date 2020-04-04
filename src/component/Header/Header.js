import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import './Header.css';



const Header = () => {
    return (

        <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
                <div className="col">
                    <div className="logo-aria">
                        <img src="https://i.ibb.co/Snjf3fp/logo2.png" alt="hot onion" />
                    </div>
                </div>

                <div className="col">
                    <div className="header-right">
                        <div className="d-flex">
                            <p>LoginUser</p>
                            <button className="btn">
                                <i className="fa .fa-cart-plus" aria-hidden="true">
                                    <i><span style={{ color: 'red' }}> Cart & Cart Item</span></i>
                                </i>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;
