import React from 'react';
import withAuthorization from '../withAuthorization';
import { Link } from 'react-router-dom';
import '../../styles/About.scss';

class About extends React.Component {
  render() {
    return (
      <section className="about">
        <div className="jumbotron p-3 p-md-5 text-white bg-dark">
          <div className="col-md-6 px-0 container">
            <h1 className="display-4">AlgoSwitch | A Coinglomerate Product</h1>
            <h4 className="my-3">DATA DRIVEN MINING SOLUTIONS</h4>
          </div>
        </div>
        <section className="container">
          <div className="row px-1 pb-4">
            <div className="tab-content">
              <div id="tab1" className="tab-pane in active mbr-table" role="tabpanel">
                <div className="row tab-content-row">
                  <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card-img ">
                      <span className="fa fa-btc fa-5x"></span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="fa-ethereum" viewBox="0 0 320 512" width="70px" height="75px">
                        <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                      </svg>
                      <span className="fa fa-usd fa-5x"></span>
                    </div>
                    <h4 className="mbr-element-title  align-center mbr-fonts-style pb-2 display-5 text-white">
                      Exchange to any currency
                    </h4>
                    <p className="mbr-section-text  align-center mbr-fonts-style display-7 text-white">
                      When you use our auto switching pool the range of coins in your wallet can add
                      up. Luckily, you can easily auto-convert your coins for easy processing to your
                      wallet by selecting your preferred coin on the <Link to='/settings'>settings</Link> page.
                    </p>
                  </div>

                  <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card-img ">
                      <span className="fa fa-random fa-5x"></span>
                    </div>
                    <h4 className="mbr-element-title  align-center mbr-fonts-style pb-2 display-5 text-white">
                      Optimized profit switching
                    </h4>
                    <p className="mbr-section-text  align-center mbr-fonts-style display-7 text-white">
                      Our team at Coinglomerate spent a year optimizing and processing date so we
                      could build our data-driven software. Competitors charge high fees and suffer
                      from poor system security all while lacking our efficiency.
                    </p>
                  </div>

                  <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card-img ">
                      <span className="fa fa-linux fa-5x"></span>
                      <span className="fa fa-windows fa-5x"></span>
                    </div>
                    <h4 className="mbr-element-title  align-center mbr-fonts-style pb-2 display-5 text-white">
                      Linux &amp; Windows friendly
                    </h4>
                    <p className="mbr-section-text  align-center mbr-fonts-style display-7 text-white">
                      Our software was made for miners by miners. We understand the frustrations and
                      limitations while deciding your operating system so we wanted to make sure our
                      software could be available for whatever you decide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-white">
            <div className="col-12 blog-main">
              <div className="blog-post">
                <img className="img-fluid float-right ml-2" width='350' height='350' src={require('../../images/market.png')} alt='market chart' />
                <h2 className="blog-post-title">WHAT IS MINING?</h2>
                <p>In a proof-of-work cryptocurrency, a blockchain network is supported by computers
                   all over the world through a process called mining. These computers perform
                   computations that solve a computationally intensive algorithm and add transactions
                   to the blockchain ledger and secure the system from malicious attack. Miners are
                   incentivized with payouts of cryptocurrency to support this network.
                </p>
                <h3>THE MARKET ENVIRONMENT</h3>
                <p>The cryptocurrency mining market is enormous; Every month cryptocurrency mining
                  generates $1.1 billion in revenue1. Moreover, capital investment in mining equipment
                  has grown, on average, 350%2 annually for the last three years.
                </p>
                <img className="img-fluid float-left mr-2" width='450' height='200' src={require('../../images/competitors.png')} alt='competition chart' />
                <h3>OUR COMPETITORS</h3>
                <p>NiceHash is our primary competitor in the space. NiceHash facilitates over
                  $520 million in mining activity and charges a 6% fee on this revenue. The NiceHash
                  marketplace functions much like a futures market. NiceHash primarily targets
                  medium-sized miners who lack in-house expertise to build effective algorithmic
                  mining arbitrage systems. The company earns an estimated $31 million in yearly
                  revenue3; however, in 2017 $60 million in customer funds were stolen by hackers
                  which may result in low customer utilization 2018.
                </p>
                <h3 className='clear-both'>OUR SOLUTION</h3>
                <p>Unlike our competitor, Coinglomerate is building software that leverages live
                  exchange and mining data to determine which, of hundreds, of different
                  cryptocurrencies to mine in a given moment. Our software is an improvement to
                  security and profitability over existing “marketplace” based arbitrage systems.
                  Using data from NiceHash, it is likely that our software will increase a miner’s
                  revenue by upwards of 15%4 while also providing customers with data analytics and
                  metrics from their mining operation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(About);