import React from 'react'

const About = () => {
  return (
    <div style={{ backgroundColor: "" }}>
      <hr />
      <h2 style={{ textAlign: "center" }}>Find out more about...</h2>
      <div className="aboutCards">
        <div className="card" style={{ width: "18rem;" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHagebkorcmqmIXUQytlVhUms_hHPzAN_fkrCxoVyFHbJZKABjoRQY0Axx17MYloADZg&usqp=CAU" className="card-img-top" alt="a picture of PITP students." />
          <div className="card-body">
            <p className="card-text">Our auditorium always provide a luxurious feel..</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem;" }}>
          <img src="https://www.muet.edu.pk/sites/default/files/styles/civictheme_slider_slide/public/images/2025-03/1740242198907.jpeg?h=a1e1a043&itok=7Oo8uZjl" className="card-img-top" alt="a picture of MUET at international conference." />
          <div className="card-body">
            <p className="card-text">We are connecting our University on International level.</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem;" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHEaFcIbWs9QHJx9PLbwjgaJx9gvRklS4IA&s" className="card-img-top" alt="a picture of pitp conference on providing facilites." />
          <div className="card-body">
            <p className="card-text">Our Societies & their moments are always excitable.</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default About
