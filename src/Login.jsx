import React from 'react'

const Login = () => {
  return (
    <>
<>
  {/*login form start */}
  <div className="container-fluid text-center mt-5">
    <div className="row justify-content-center">
      <div
        className="form col-sm-12 col-md-7 col-lg-6 col-xl-5 col-xxl-4 shadow bg-light"
        style={{ padding: "4em" }}>
        <form className="form_container" method="post">
          <h2 className="form_title">Log in</h2>
          {/* <p class="form_text-content">New here? <a href="#">Create an account</a></p> */}
          <div className="form_field mb-3">
            <input
              type="email"
              id="email"
              name="email"
              className="form_input"
              placeholder="Email"
            />
            <span className="text-danger"></span>
          </div>
          <div className="form_field">
            <input
              type="password"
              id="password"
              name="password"
              className="form_input"
              placeholder="Password"
            />
            <span className="text-danger"></span>
          </div>
          <div className="form_checkbox d-flex justify-content-start mb-3">
            <input type="checkbox" className="form_input-checkbox" />
            <label className="form_checkbox-text pt-0">Remember me</label>
          </div>
          <button type="submit" id="button" className="form_button w-100">
            Log in
          </button>
        </form>
      </div>
    </div>
    {/*login form end */}
  </div>
</>

    </>
  )
}

export default Login