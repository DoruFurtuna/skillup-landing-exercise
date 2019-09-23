import React from 'react';
import background from '../../images/dashboard_full_2.webp';
import "./styles.scss";


export default function FirstComponent(props) {
  return (
      <div>
            <div className="wrapper">
                <div className="container">
                    <nav className="navbar">
                        <a className="logo" href="index.html"><img src="" alt=""/></a>
                        <ul className="menu">
                            <li>
                                <a className="active" href="index.html">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Domain</a>
                            </li>
                            <li>
                                <a href="#">Hosting</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                            <a href="contact.html" className="nav-link">
                                <span>Get started</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="container">
                <div className="slider-wrapper">
                <div className="slider-text">
                    <div className="left_block">
                        <h1>
                            Design.
                            <br/>
                            Development.
                            <br/>
                            Hosting.
                        </h1>
                        <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                        <a href="#" className="btn">Get started</a>
                    </div>
                    <div className="right_block">
                        <div className="slider-carousel">
                            <img src="../../images/dashboard_full_2.webp" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
  )
};




