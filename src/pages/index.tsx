import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaUser,
  FaLock,
  FaEnvelope
} from 'react-icons/fa'
import { Container } from '../styles/pages/Home'
import { IViewProps } from '../modules/types'

const LoginScreen: React.FC = (props: IViewProps): JSX.Element => {
  const { name } = props
  return (
    <Container>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              {/* inputs for refactoring */}
              <div className="input-field">
                <i>
                  <FaUser />
                </i>
                <input type="text" placeholder="Username" />
              </div>

              <div className="input-field">
                <i>
                  <FaLock className="input-icon" />
                </i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />

              <p className="social-text">Or sign in with social platform</p>
              <div className="social-media">
                {/* social media icons to refactoring */}
                <a href="#" className="social-icon">
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i>
                    <FaTwitter />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i>
                    <FaGoogle />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i>
                    <FaLinkedinIn />
                  </i>
                </a>
              </div>
            </form>

            <form action="" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              {/* inputs for refactoring */}
              <div className="input-field">
                <i>
                  <FaUser />
                </i>
                <input type="text" placeholder="Username" />
              </div>

              <div className="input-field">
                <i>
                  <FaEnvelope className="input-icon" />
                </i>
                <input type="password" placeholder="Email" />
              </div>

              <div className="input-field">
                <i>
                  <FaLock className="input-icon" />
                </i>
                <input type="password" placeholder="Password" />
              </div>

              <input type="submit" value="Sign up" className="btn solid" />

              <p className="social-text">Or sign up with social platform</p>
              <div className="social-media">
                {/* social media icons to refactoring */}
                <a href="#" className="social-icon">
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i>
                    <FaTwitter />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i>
                    <FaGoogle />
                  </i>
                </a>
                <a href="#" className="social-icon">
                  <i>
                    <FaLinkedinIn />
                  </i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img
              className="image"
              src={require('../images/desk.png')}
              alt="logo"
            />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img
              className="image"
              src={require('../images/desk.png')}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LoginScreen
