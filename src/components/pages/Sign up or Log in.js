import React from 'react';

const SignupLogin = () => {
  return (
    <section className="content-container" style={{ marginTop: '220px', display: 'flex' }}>
      <div className="text-area" style={{ textAlign: 'center' }}>
        <div className="col-center">
          <h1>Join Us</h1>
          <p>Revolutionizing education with an AI-powered easy and efficient technique.<br/> Make a positive impact in the world of education - join us now!</p>
        </div>
      </div>


        <div className="col-left" style={{ marginTop: '10px', marginRight: '1px', flex: 1 }}>
          <form id="signup" action="" style={{ width: '100%' }}>
            <h2>Sign up</h2>
            <fieldset>
              <a href="https://accounts.google.com/"> 
                <button type="button" id="signup-connect">Connect with Google</button>
              </a>
            </fieldset>
            <fieldset>
              <input type="text" placeholder="Your Name" required autoFocus />
            </fieldset>
            <fieldset>
              <input type="email" placeholder="Your Email Address" required />
            </fieldset>
            <fieldset>
              <input type="password" placeholder="Your Password" required />
            </fieldset>
            <fieldset>
              <button type="submit" id="signup-submit">Submit</button>
            </fieldset>
          </form>
        </div>


        <div className="col-right" style={{ flex: 1 }}>
          <form id="login" action="" style={{ width: '100%', marginTop: '30px', flex: 1}}>
            <h2>Log in</h2>
            <fieldset>
              <a href="https://accounts.google.com/">
                <button type="button" id="login-connect">Connect with Google</button>
              </a>
            </fieldset>
            <fieldset>
              <input type="email" placeholder="Your Email Address" required />
            </fieldset>
            <fieldset>
              <input type="password" placeholder="Your Password" required />
            </fieldset>
            <fieldset>
              <button type="submit" id="login-submit">Continue</button>
            </fieldset>

          </form>
        </div>
    </section>
  );
}

export default SignupLogin;
