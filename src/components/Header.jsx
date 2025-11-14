import React from 'react'

const Header = () => {
    return (
        <div className="b">
            <nav className="navbar navbar-expand-lg bg-body-warning ">
                <div className="container-fluid">
                    <a href="/"><img className="logPic" height={"100px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RBQ4lulW70MUFnw8HscwHFCItX-mDO4Gxw&s" alt="a picture of MUET's logo." /></a>
                    <a className="navbar-brand text-primary" href="/">MUET</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-primary" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-primary" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-primary" href="/exploreDepartments" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admission
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/exploreDepartments">Graduate</a></li>
                                    <li><a className="dropdown-item" href="#">Undergraduate</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Postgraduates</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled text-primary" aria-disabled="true">Students</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search Anything" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
