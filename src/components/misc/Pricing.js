import React from 'react'
import './Pricing.css'

const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
            <div className="columns">
                <ul className="price">
                    <li className="col-header">Basic</li>
                    <li className="grey">$ Free / year</li>
                    <li>AI support</li>
                    <li>12 videos</li>
                    <li>No Highlight</li>
                    <li className="grey"><a href="/Sign up or Log in">Sign Up</a></li>                    

                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header" style={{backgroundColor:'#37387a'}}>Pro</li>
                    <li className="grey">$ 24.99 / year</li>
                    <li>AI support</li>
                    <li>Unlimited  videos</li>
                    <li>7 Highlight / day</li>
                    <li className="grey"><a href="/Sign up or Log in">Sign Up</a></li>  
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header">Premium</li>
                    <li className="grey">$ 49.99 / year</li>
                    <li>AI support</li>
                    <li>Unlimited videos</li>
                    <li>Unlimiited Highlight</li>
                    <li className="grey"><a href="/Sign up or Log in">Sign Up</a></li>  
                </ul>
            </div>
            </section>
        </React.Fragment>
    )
}

export default Home;