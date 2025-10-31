import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div class="container col-xxl-8 px-4 py-5 ">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="pic5.jpeg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Top Security Procedures On-Hand</h1>
            <p class="lead">We provide you with all types of Security procedures, starting from the smallest detail to the major ones, no need to worry as we will protect you from any danger or threat, leaving you fully protected and secure.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href='#more' class="btn btn-info btn-lg px-4 me-md-2">Get Started</a>
              <Link to="/about" class="btn btn-outline-dark btn-lg px-4">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <div class="container pb-5">
        <div class="row" id='more'>
          <div class="card text-black bg-light mb-3 m-3" style={{ maxWidth: "18rem" }}>
            <div class="card-header"><ion-icon name="shield-checkmark-outline"></ion-icon> Saftey</div>
            <div class="card-body">
              <p class="card-text">All of our services aim to protect you and provide you with safety and security against any threat.</p>
              <Link to="/about" class="btn btn-outline-secondary">Read More</Link>
            </div>
          </div>

          <div class="card text-black bg-info mb-3 m-3" style={{ maxWidth: "18rem" }}>
            <div class="card-header "><ion-icon name="brush-outline"></ion-icon> Creativity</div>
            <div class="card-body">
              <p class="card-text">You can customize all of the services we provide to your own prefrence and want.</p>
              <Link to="/about" class="btn btn-outline-dark">Read More</Link>
            </div>
          </div>

          <div class="card text-black bg-light mb-3 m-3" style={{ maxWidth: "18rem" }}>
            <div class="card-header"><ion-icon name="cash-outline"></ion-icon> Cost-Effeciency</div>
            <div class="card-body">
              <p class="card-text">We provide you with a wide range of cost-friendly services that all can afford and have.</p>
              <Link to="/about" class="btn btn-outline-secondary">Read More</Link>
            </div>
          </div>

          <div class="card text-black bg-info mb-3 m-3" style={{ maxWidth: "18rem" }}>
            <div class="card-header"><ion-icon name="accessibility-outline"></ion-icon> Accessibility</div>
            <div class="card-body">
              <p class="card-text">Our services are also very accessible to all people, so all of you can use it freely.</p>
              <Link to="/about" class="btn btn-outline-dark">Read More</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home