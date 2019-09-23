import React from 'react';
import background from '../../images/bg_1.webp';
import './styles.scss';

export default function FunFactsComponent(props) {
  return (
    <div id="fun-facts-wrapper">
      <section>
        <img src={background} alt="fundal" />

        <div className="row justify-content-center mb-5 pb-5">
          <h2 className="mb-4">Some fun facts</h2>
          <span className="subheading">More than 100,000 websites hosted</span>
        </div>

        <div className="row justify-content-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="coll-md-3 d-flex juctify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="2000">
                      2,000
                    </strong>
                    <span>CMS Installation</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="100">
                      0
                    </strong>
                    <span>Awards Won</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="32000">
                      0
                    </strong>
                    <span>Registered Domains</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="31998">
                      0
                    </strong>
                    <span>Satisfied Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
