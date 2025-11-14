import React from 'react'

const Facilites = () => {
    return (
        <div>
            <div className="card" style={{width: "18rem;"}}>
                <div className="card-body">
                    <h5 className="card-title">Library</h5>
                    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
                    <p className="card-text">Explore our well structured .</p>
                    <a href="#" className="card-link">Card link</a>
                    {/* <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>
            <div>
                <div className="card" style={{width: "18rem;"}}>
                    <div className="card-body">
                        <h5 className="card-title">Labs</h5>
                        {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
                        <p className="card-text">Students practice in an enjoyable lab environment.</p>
                        <a href="#" className="card-link">See more</a>
                        {/* <a href="#" className="card-link">Another link</a> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Facilites
