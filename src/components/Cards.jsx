import React from 'react'

const Cards = () => {
    return (
        <div className="myCards">
            <div className="card" style={{ width: "18rem" }}>
                <i className="fa-solid fa-user-graduate"></i>
                <div className="card-body">
                    <h5 className="card-title">Visit MUET</h5>
                    <p className="card-text">You will explore each type of people and thier lives.</p>
                    <a href="#" className="btn btn-primary">Explore it.</a>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <i className="fa-solid fa-graduation-cap"></i>
                <div className="card-body">
                    <h5 className="card-title">Undergraduate Programs</h5>
                    <p className="card-text">Choose from 24+ Undergraduate programs.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <i className="fa-solid fa-award"></i>
                <div className="card-body">
                    <h5 className="card-title">Postgraduate Courses</h5>
                    <p className="card-text"> Explore Postgraduate courses and take your career to the next level.</p>
                    <a href="#" className="btn btn-primary">Explore</a>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <i className="fa-solid fa-book-open-reader"></i>
                <div className="card-body">
                    <h5 className="card-title">Research</h5>
                    <p className="card-text"> World-leading researchers across all disciplines - from professors to honours students.</p>
                    <a href="#" className="btn btn-primary">Explore</a>
                </div>
            </div>
        </div>
    )
}

export default Cards
