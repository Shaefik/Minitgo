
    import React from "react";

    function Navbar() {
        return (
            <div>
                <nav id="na" className="navbar navbar-expand-lg navbar-light ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Blog</a>
                            <a className="nav-item nav-link" href="#">Categories</a>
                            <a className="nav-item nav-link" href="#">About</a>
                            <a className="nav-item nav-link" href="#">Contact</a>
                            <a className="nav-item nav-link" href="#">Features</a>
                            <a className="nav-item nav-link" href="#">Contents</a>
                            <a className="nav-item nav-link" href="#">Features</a>
                            <a className="nav-item nav-link" href="#">Titles</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

    export default Navbar;
