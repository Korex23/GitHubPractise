import { Form, Button, Card, Alert } from "react-bootstrap";

export const SignUpForm = () => {
  return (
    <section>
      <div className="container">
        <form className="w-75 mx-auto">
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example1"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example2"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="form3Example3"
              className="form-control"
              placeholder="E-mail address"
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form3Example4"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form3Example4"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">
              Sign Up
            </button>
          </div>

          <div className="text-center">
            <p>or sign up with:</p>
            <button
              type="button"
              className="btn btn-primary btn-floating rounded-circle mx-1"
            >
              <i className="bi bi-facebook"></i>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-floating rounded-circle mx-1"
            >
              <i className="bi bi-google"></i>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-floating rounded-circle mx-1"
            >
              <i className="bi bi-twitter"></i>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-floating rounded-circle mx-1"
            >
              <i className="bi bi-github"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export const LoginForm = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1>Login Form</h1>
      <form
        className="w-75 mx-auto"
        name="loginForm"
        method="get"
        id="loginForm"
      >
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            name="loginMail"
            placeholder="E-mail address"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            placeholder="Password"
            name="loginPassword"
          />
        </div>

        <div className="row mb-4">
          <div className="col-sm-12 col-md-6 text-center">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example34"
                  checked
                />
                <label className="form-check-label" for="form2Example34">
                  Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 text-center">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <div className="d-grid gap-2">
          <input
            type="button"
            value="Sign In"
            className="btn"
            id="signInButton"
          />
        </div>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button
            type="button"
            className="btn btn-primary btn-floating mx-1 rounded-circle"
          >
            <i className="bi bi-facebook"></i>
          </button>

          <button
            type="button"
            className="btn btn-primary btn-floating mx-1 rounded-circle"
          >
            <i className="bi bi-google"></i>
          </button>

          <button
            type="button"
            className="btn btn-primary btn-floating mx-1 rounded-circle"
          >
            <i className="bi bi-twitter"></i>
          </button>

          <button
            type="button"
            className="btn btn-primary btn-floating mx-1 rounded-circle"
          >
            <i className="bi bi-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export const ContactForm = () => {
  return (
    <div className="row container g-3 mt-5">
      <h1>Contact Us Form</h1>
      <div className="col-md-5 col-sm-12 p-4">
        <p className="h1">Leave a message</p>
        <p>We'll get back to you in less than 24 hours</p>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-instagram"></i>
      </div>
      <div className="col-md-7 col-sm-12">
        <form name="contactForm" id="conForm" method="get" className="form">
          <div className="form-outline mb-4">
            <input
              type="text"
              className="form-control"
              name="fullName"
              placeholder="Full-Name"
            />
            <div id="error_name"></div>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="E-mail"
            />
            <div id="error_mail"></div>
          </div>

          <div className="form-outline mb-4">
            <input
              type="tel"
              className="form-control"
              name="number"
              placeholder="Phone Number"
            />
          </div>
          <div id="error_number"></div>

          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              rows="4"
              name="message"
              placeholder="Message"
            ></textarea>
            <div id="error_message"></div>
          </div>

          <input type="button" value="Submit" id="button" className="btn" />
        </form>
      </div>
    </div>
  );
};
