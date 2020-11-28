import React from "react";
import "./style.scss";

function FormLogin(props) {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div
            className="show-infor"
            // style={{
            //   backgroundImage:
            //     "url(" +
            //     "https://nhandan.com.vn/imgold/media/k2/items/src/4202/d77f54b1793ef5b2c46f5cbf171aa0ec.jpg" +
            //     ")",
            //   backgroundPosition: "center",
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            // }}
          >
            <div className="address-icon">
              <h1>
                <i class="fa fa-map-marker" aria-hidden="true"></i> ADDRESS
              </h1>
              <h1>321, Street Name, Country</h1>
            </div>
            <div className="email-icon">
              <h1>
                <i class="fa fa-envelope" aria-hidden="true"></i> EMAIL
              </h1>
              <h1>yourmail@domain.com</h1>
            </div>
          </div>

          <div className="required-infor">
            <div className="register-user">
              <form>
                <h2>Get in Touch</h2>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
                <textarea
                  type="text"
                  id="query"
                  name="query"
                  placeholder="Enter Your Query "
                />
                <button
                  type="submit"
                  defaultValue="Submit"
                  className="btn-submit"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormLogin;
