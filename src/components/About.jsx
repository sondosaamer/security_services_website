import React from 'react'
import pic8 from '../images/pic8.jpeg'
import pic11 from '../images/pic11.jpeg'

function About() {
  return (
    <>
      <div className="container col-xxl-8 px-4 pt-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">

          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Our Vision</h1>
            <p className="lead">Homes and companies that are secured and protected against all kinds of threats or attacks with modern and effecient ways.</p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={pic8} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="container col-xxl-8 px-4  pb-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 ">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={pic11} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Our Mission</h1>
            <p className="lead">We aim to provide our clients with all sorts of services they need to feel safe, all with less cost and more personalization.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About