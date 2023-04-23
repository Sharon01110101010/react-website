import React from 'react'

const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea" style={{ textAlign: 'center' }}> 
                    <h2>Contact Us</h2>
                    <p>
                        We would love to hear from you!.<br/>
                        For any enquiries, feel free to drop us an email!
                    </p>
                    <p>
                        How can we help you?
                    </p>
                </div>

                <div className="block">
                    <div className="row">
                        <div className="col-left">
                            <form id="contact" action="">
                                <h4>Leave us a message</h4>
                                <fieldset>
                                    <input placeholder="Your Name" type="text" tabIndex="1" required autoFocus />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Subject" type="text" tabIndex="2" required autoFocus />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Email Address" type="email" tabIndex="3" required />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Phone Number" type="tel" tabIndex="4" required />
                                </fieldset>
                                <fieldset>
                                    <textarea placeholder="Type your Message Here...." tabIndex="5" required></textarea>
                                </fieldset>
                                <fieldset>
                                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}


export default Home;

