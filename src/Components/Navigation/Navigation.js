import React from "react";
import me from "./me.jpg"


function Navigation() {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid bg-dark text-light">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <div className="nav_navlinks">
                        <a className="btn btn-outline-secondary mx-2" href="/"><i class="fa-solid fa-house"></i></a>
                        <a className="btn btn-outline-secondary mx-2" href="/"><i class="fa-solid fa-file"></i></a>
                        <a className="btn btn-outline-secondary mx-2" href="/"><i class="fa-solid fa-trophy"></i></a>
                    </div>
                    <div className="Profile_stuff d-flex">
                        <div className="profile_image">
                            <img src={me} alt="boy standing infront of sea" className="mx-3" />
                            <span className="text-warning">Name here</span>
                            <i class="fa-solid fa-heart mx-3 "></i>
                            <i class="fa-solid fa-bell  mx-3" ></i>
                            <button className="btn btn-primary mx-3">+ Add</button>

                        </div>

                    </div>



                </div>

            </nav>





        </>
    )
}

export default Navigation