import React from 'react';
import './Mission.css';
import '../App.css'

function Mission() {
  return (
        <section id="mission">
            <div className="jumbotron jumbotron-fluid bg-dark text-light text-center mission p-5">
                <div className="container">
                    <h1>Our Mission</h1>
                    <p>Our mission at Upside x Down is raising awerness for depression and suicide.
                        <br />We will donate twenty percent of the proceeds to foundations that bring awareness to the cause.
                        <br /> Follow us on all platforms to keep updated on the donations!
                    </p>
                </div>
            </div>  
        </section>
  )
}

export default Mission;
