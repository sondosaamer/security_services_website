import React from 'react'

function Contact() {
  return (
    <>
      <div class="container col-xl-10 col-xxl-9 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">Always a call away from you</h1>
            <p class="col-lg-10 fs-4">You can always contact us for any problem or issue you're facing, just type your message and click send so we receive it, or you just can call us on our number.</p>
          </div>

          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-light">
              <h2 className='text-center m-2'>Contact us</h2>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingsub" placeholder="Password" />
                <label for="floatingsub">Subject</label>
              </div>

              <div class="form-floating mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                <label for="floatingmsg">Message</label>
              </div>

              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> My responce will be recorded
                </label>
              </div>
              
              <button class="w-100 btn btn-lg btn-info" type="submit">Send</button>
              <hr class="my-4" />
              <div className='text-center'>
                <p>or:</p>
                <button class="w-100 btn btn-lg btn-success" ><ion-icon name="call-outline"></ion-icon> 123-456-789</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact