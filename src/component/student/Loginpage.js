import React, { useState } from "react";
import "./Loginpage.css";
import Footer from "../../Components/common/footer/footer";
import CommonNavbar from "../../Components/common/commonNavbar/commonNavbar";
function Loginpage() {
  const [inp, setInp] = useState({
    name: "",
    email: "",
    password: "",
    Rpassword: "",
  });
  function inpvalue(action) {
    setInp({ ...inp, [action.target.name]: action.target.value });
  }
  function btnclick() {
    console.log(inp);
  }
  return (
    <div>
      <CommonNavbar/>
      <div className="body">
        <div class="container text-center">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 left-box">
              <h1 class="display-1 left-heading ">LIBRARY</h1>
              <p>
                “The only thing that you absolutely have to know, is the
                location of the library.”
                <br />― Albert Einstein
              </p>
            </div>

            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 right-box ">
              <div className="signup-box">
                <div className="inner-login-box">
                  <h2 className="signup-heading">Registration Info</h2>

                  <form action="">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control  inp-group "
                        id="formGroupExampleInput2"
                        placeholder="  User Name"
                        name="userName"
                        onChange={inpvalue}
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control inp-group"
                        id="formGroupExampleInput"
                        placeholder="Your Email"
                        name="email"
                        onChange={inpvalue}
                      />
                    </div>

                    <div class="mb-3">
                      <input
                        type="password"
                        class="form-control inp-group"
                        id="formGroupExampleInput"
                        placeholder="Password"
                        name="password"
                        onChange={inpvalue}
                      />
                    </div>

                    <div class="mb-3">
                      <input
                        type="password"
                        class="form-control inp-group"
                        id="formGroupExampleInput"
                        placeholder="Repeat password"
                        name="Rpasswword"
                        onChange={inpvalue}
                      />
                    </div>
                    <button type="button" onClick={btnclick}>
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Loginpage;
