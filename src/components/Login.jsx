import React from 'react'

function Login() {
  


  function sign() {
    const signCard = document.getElementById("sign")
    const loginCard = document.getElementById("login")
    if (signCard.style.display == "block"){
      signCard.style.display = "none"
      loginCard.style.display = "block"
      return
    }
    signCard.style.display = "block"
    loginCard.style.display = "none"
  }

  function login() {
    
  }

  return (
    <>
      <section class="text-center mb-5" >
        <div class="p-5 bg-image" style={{
          backgroundImage: "url('pic7.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "300px"
        }}></div>

        <div class="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary" style={{
          marginTop: "-100px",
          backdropFilter: "blur(30px)"
        }}>
          <div class="card-body py-5 px-md-5" id='login'>

            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h2 class="fw-bold mb-5">Login</h2>
                <form>

                  <div data-mdb-input-init class="form-floating mb-4">
                    <input type="email" id="form3Example3" class="form-control" required />
                    <label class="form-label" for="form3Example3">Email address</label>
                  </div>

                  <div data-mdb-input-init class="form-floating mb-4">
                    <input type="password" id="form3Example4" class="form-control" required />
                    <label class="form-label" for="form3Example4">Password</label>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label class="form-check-label" for="form2Example33">
                      Remember me
                    </label>
                  </div>

                  <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-dark w-25 btn-block mb-4">
                    login
                  </button>

                  <div class="text-center">
                    <p>Don't have an account? <a href="#" onClick={sign}>Register</a></p>

                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="card-body py-5 px-md-5" id='sign' style={{ display: "none" }}>

            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h2 class="fw-bold mb-5">Sign up now</h2>
                <form>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-floating ">
                        <input type="text" id="form3Example1" class="form-control" required />
                        <label for="form3Example1">First name</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-floating">
                        <input type="text" id="form3Example2" class="form-control" required />
                        <label class="form-label" for="form3Example2">Last name</label>
                      </div>
                    </div>
                  </div>

                  <div data-mdb-input-init class="form-floating mb-4">
                    <input type="email" id="form3Example3" class="form-control" required />
                    <label class="form-label" for="form3Example3">Email address</label>
                  </div>

                  <div data-mdb-input-init class="form-floating mb-4">
                    <input type="password" id="form3Example4" class="form-control" required />
                    <label class="form-label" for="form3Example4">Password</label>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label class="form-check-label" for="form2Example33">
                      Agree to terms and conditions
                    </label>
                  </div>

                  <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-dark w-25 btn-block mb-4">
                    Sign up
                  </button>

                  <div class="text-center">
                    <p>Already have an account? <a href="#" onClick={sign}>Login</a></p>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Login