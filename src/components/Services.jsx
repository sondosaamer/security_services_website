import React from 'react'
import { Link } from 'react-router-dom'
import data from './data/sample.json';

function Services() {
    return (
        <>
            <div style={{ backgroundImage: "url('pic12.jpeg')" }}>
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
                                        <img src="pic1.jpeg" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="pic13.jpeg" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="pic14.jpeg" class="d-block w-100" alt="..." />
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
                                <img src={service.img} class="card-img-top" alt={service.title} />
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