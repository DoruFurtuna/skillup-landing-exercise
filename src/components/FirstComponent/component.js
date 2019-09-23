import React from 'react';
import background from '../../images/dashboard_full_2.webp';
import "./styles.scss";


export default function FirstComponent(props) {
  return (
      <div>
            <div class="wrapper">
                <div class="container">
                    <nav class="navbar">
                        <a class="logo" href="index.html"><img src=""/></a>
                        <ul class="menu">
                            <li>
                                <a class="active" href="index.html">
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
                            <a href="contact.html" class="nav-link">
                                <span>Get started</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="container">
                <div class="slider-wrapper">
                <div class="slider-text">
                    <div class="left_block">
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
                        <a href="#" class="btn">Get started</a>
                    </div>
                    <div class="right_block">
                        <div class="slider-carousel">
                            <img src="../../images/dashboard_full_2.webp" alt></img>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
  )
};




