import React from "react";
function MainContent() {
    return (
        <>
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-md-2 bg-dark">
                        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="/">
                                        <i className="fa-solid fa-gauge"></i>
                                        Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="/">
                                        <i className="fa-solid fa-file"></i>
                                        Orders
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="/">
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        Products
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="/">
                                        <i className="fa-solid fa-people-group"></i>
                                        Customers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="/">
                                        <i className="fa-solid fa-chart-line"></i>
                                        Reports
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="/">
                                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                                        Integrations
                                    </a>
                                </li>
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                                <span>Saved reports</span>
                                <a className="link-secondary" href="/" aria-label="Add a new report">

                                </a>
                            </h6>
                            <ul className="nav flex-column mb-auto">
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="/">
                                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                                        Current month
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="/">
                                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                                        Last quarter
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="/">
                                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                                        Social engagement
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="/">
                                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                                        Year-end sale
                                    </a>
                                </li>
                            </ul>

                            <hr className="my-3" />

                            <ul className="nav flex-column mb-auto">
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="/">
                                        <i className="fa-solid fa-gear"></i>
                                        Settings
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center gap-2" href="/">
                                        <i className="fa-solid fa-door-open"></i>
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 bg-secondary">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2 text-light">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-outline-light">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-light">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-light dropdown-toggle d-flex align-items-center gap-1">
                                    <i className="fa-solid fa-calendar-days"></i>
                                    This week
                                </button>
                            </div>
                        </div>
                        {/* MAIN CONTENT FORM HERE START */}
                        <table class="table table-bordered border-light">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <th className="col">Sno</th>
                                    <th className="col">First</th>
                                    <th className="col">Last</th>
                                    <th className="col">Handle</th>
                                    <th className="col">third</th>
                                    <th className="col" colSpan={7}>Actions</th>
                                   
                                  
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>@mdo</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>                           
                            </tbody>
                        </table>

                    </div>

                </div>

            </div></>
    );
};

export default MainContent