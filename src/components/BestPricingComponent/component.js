import React from 'react';
import './styles.scss';

export default function BestPricing() {
  return (
    <div className="wrapper">
      <div className="title">
        <h4 className="pricing">Pricing Plans</h4>
        <h1 className="best">Our Best Pricing</h1>
      </div>
      <div className="content">
        <div className="first">
          <h2 className="type">Free</h2>
          <div className="theprice">
            <sup className="dollar">$</sup>
            <span className="amount">0</span>
          </div>
          <span className="message">100% free. Forever</span>
          <button className="Get" type="button">
            Get Started
          </button>
          <p className="description">Enjoy All The Features</p>
          <p className="description">
            150 GB <span className="grey">Bandwidth</span>
          </p>
          <p className="description">
            100 GB <span className="grey">Storage</span>
          </p>
          <p className="description">
            $1.00 / GB <span className="grey">Overages</span>
          </p>
          <p className="lastd">All features</p>
        </div>
        <div className="second">
          <h2 className="type">Startup</h2>
          <div className="theprice">
            <sup className="dollar">$</sup>
            <span className="amount">19</span>
          </div>
          <span className="message">All features are included</span>
          <button className="Get" type="button">
            Get Started
          </button>
          <p className="description">Enjoy All The Features</p>
          <p className="description">
            450 GB <span className="grey">Bandwidth</span>
          </p>
          <p className="description">
            400 GB <span className="grey">Storage</span>
          </p>
          <p className="description">
            $2.00 / GB <span className="grey">Overages</span>
          </p>
          <p className="lastd">All features</p>
        </div>
        <div className="third">
          <h2 className="type">Premium</h2>
          <div className="theprice">
            <sup className="dollar">$</sup>
            <span className="amount">49</span>
          </div>
          <span className="message">All features are included</span>
          <button className="Get" type="button">
            Get Started
          </button>
          <p className="description">Enjoy All The Features</p>
          <p className="description">
            250 GB <span className="grey">Bandwidth</span>
          </p>
          <p className="description">
            200 GB <span className="grey">Storage</span>
          </p>
          <p className="description">
            $5.00 / GB <span className="grey">Overages</span>
          </p>
          <p className="lastd">All features</p>
        </div>
        <div className="fourth">
          <h2 className="type">Pro</h2>
          <div className="theprice">
            <sup className="dollar">$</sup>
            <span className="amount">99</span>
          </div>
          <span className="message">All features are included</span>
          <button className="Get" type="button">
            Get Started
          </button>
          <p className="description">Enjoy All The Features</p>
          <p className="description">
            450 GB <span className="grey">Bandwidth</span>
          </p>
          <p className="description">
            400 GB <span className="grey">Storage</span>
          </p>
          <p className="description">
            $20.00 / GB <span className="grey">Overages</span>
          </p>
          <p className="lastd">All features</p>
        </div>
      </div>
    </div>
  );
}
