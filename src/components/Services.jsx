import React from 'react'
import { Link } from 'react-router-dom'
import data from './data/sample.json';
import pic1 from '../images/pic1.jpeg'
import pic13 from '../images/pic13.jpeg'
import pic14 from '../images/pic14.jpeg'
import pic12 from '../images/pic12.jpeg'
import pic15 from '../images/pic15.jpeg'
import pic16 from '../images/pic16.jpeg'
import pic17 from '../images/pic17.jpeg'
import pic18 from '../images/pic18.jpeg'
import pic19 from '../images/pic19.jpeg'
import pic20 from '../images/pic20.jpeg'
import pic21 from '../images/pic21.jpeg'
import pic22 from '../images/pic22.jpeg'
import pic23 from '../images/pic23.jpeg'
import pic24 from '../images/pic24.jpeg'
import pic25 from '../images/pic25.jpeg'
import pic26 from '../images/pic26.jpeg'


const imageMap = {
  pic15, pic16, pic17, pic18, pic19, pic20,
  pic21, pic22, pic23, pic24, pic25, pic26
}

function Services() {
    return (
        <>
            <div style={{ backgroundImage: `url(${pic12})` }}>
                <div class="container col-xxl-8 px-4 py-5 ">
                    <div class="row flex-lg-row align-items-center g-5 py-5">
                        <div class="col-lg-6 text-light">
                            <h1 class="display-5 fw-bold lh-1 mb-3">Our Services and Products</h1>
                            <p class="lead">We provide you with a wide variation and collection of services and products that will help make you more safe and secure.</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                <a href="#pro" class="btn btn-info btn-lg px-4 me-md-2">Get Started</a>
                                <Link to="/about" class="btn btn-outline-light btn-lg px-4">Learn More</Link>
                            </div>
                        </div>

                        <div class="col-10 col-sm-8 col-lg-6">
                            <div id="carouselExampleIndicators" class="carousel slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={pic1} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={pic13} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={pic14} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="container py-5" id="pro">
                <div class="row row-cols-auto gap-5 justify-content-center" >
                    {
                        data.map((service) => (
                            <div class="card" style={{ width: "18rem" }}>
                                <img src={imageMap[service.img]} class="card-img-top" alt={service.title} />
                                <div class="card-body text-center d-flex align-content-center flex-column">
                                    <h5 class="card-title">{service.title}</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">{service.description}</li>
                                        <li class="list-group-item">Price: ${service.price}</li>
                                    </ul>
                                    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">About service</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            This service is not avaliable at the moment.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services