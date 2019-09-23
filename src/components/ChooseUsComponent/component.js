import React from 'react';
import "./styles.scss";
export default function ChooseUsComponent(props) {
  return (
    <div>
  <div className="container">
        <div className="services">Services</div>
        <div className="choose">Why choose us</div>
        <div className="blocks">
          <div className="block1">
            <div className="icon"></div>
            <div className="title">100% Uptime Guarantee</div>
            <p className="text">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="block2">
            <div className="icon"></div>
            <div className="title">Safe and Secured</div>
            <p className="text">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="block3">
            <div className="icon"></div>
            <div className="title">Our Dedicated Support</div>
            <p className="text">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div>
</div>
  );
}
