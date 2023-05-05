import React from "react";
import card from '../Components/card.jpg'
function MainContent() {
    return (
        <>
            <div class="container-fluid text-center">
                <div class="row main_layout_container">
                    <div class="col  bg-dark  first_layout">
                        Columnl
                    </div>

                    <div class="col second_layout">
                        <header class="bg-dark">
                            <div class="container">
                                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                                        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                                    </a>

                                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

                                        <li><a href="/" class="nav-link px-2 link-body-emphasis text-light">Inventory</a></li>
                                        <li><a href="/" class="nav-link px-2 link-body-emphasis text-light">Customers</a></li>
                                        <li><a href="/" class="nav-link px-2 link-body-emphasis text-light">Products</a></li>
                                    </ul>



                                    <div class="dropdown text-end">
                                        <a href="/" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                                        </a>
                                        <ul class="dropdown-menu text-small">
                                            <li><a class="dropdown-item" href="/">New project...</a></li>
                                            <li><a class="dropdown-item" href="/">Settings</a></li>
                                            <li><a class="dropdown-item" href="/">Profile</a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a class="dropdown-item" href="/">Sign out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div className="container-fluid bg-dark my-1 p-2 main-container">
                            <div className="card-container d-flex ">

                                <div class="card mx-1">
                                    <img src={card} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Someand make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div class="card mx-1">
                                    <img src={card} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Someand make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div class="card mx-1">
                                    <img src={card} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Someand make up tntent.</p>
                                    </div>
                                </div>
                                <div class="card mx-1">
                                    <img src={card} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Someand make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div class="card mx-1">
                                    <img src={card} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Someand make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-container d-flex ">

                                <div class="card mx-1">
                                    <img src={card} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Someand make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                          
                       
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default MainContent