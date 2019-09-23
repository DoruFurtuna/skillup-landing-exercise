import React from 'react';
import background from '../../images/bg_1.webp';
import "./styles.scss"


export default function FunFactsComponent(props) {
    return (
        <div>
            <section>
                <img src={background} alt="fundal" />
                <div class="container">
                    <div class="row justify-content-center mb-5 pb-5">
                        <h2 class="mb-4">Some fun facts</h2>
                        <span class="subheading">More than 100,000 websites hosted</span>
                    </div>
                </div>
                <div class="row justify-content-content-center">
                    <div class="col-md-10">
                        <div class="row">
                            <div class="coll-md-3 d-flex juctify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                <div class="block-18 text-center">
                                    <div class="text">
                                        <strong class="number" data-number="2000">2,000</strong>
                                        <span>CMS Installation</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div class="block-18 text-center">
                                    <div class="text">
                                        <strong class="number" data-number="100">0</strong>
                                        <span>Awards Won</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div class="block-18 text-center">
                                    <div class="text">
                                        <strong class="number" data-number="32000">0</strong>
                                        <span>Registered Domains</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div div class="block-18 text-center">
                                    <div class="text">
                                        <strong class="number" data-number="31998">0</strong>
                                        <span>Satisfied Customers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};
