import React from 'react'

function About() {
  return (
    <>
      <div class="container col-xxl-8 px-4 pt-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 pt-5">

          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Our Vision</h1>
            <p class="lead">Homes and companies that are secured and protected against all kinds of threats or attacks with modern and effecient ways.</p>
          </div>
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="pic8.jpeg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
        </div>
      </div>

      <div class="container col-xxl-8 px-4  pb-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 ">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="pic11.jpeg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Our Mission</h1>
            <p class="lead">We aim to provide our clients with all sorts of services they need to feel safe, all with less cost and more personalization.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About