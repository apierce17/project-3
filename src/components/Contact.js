import React from 'react';
import './Contact.css';
import '../App.css'

function Contact() {
  return (
    <section className="bg-dark contact">
        <div className="container text-light p-5 contact">
            <h1>Contact</h1>
            <br />
                <form action="https://formspree.io/f/xqkggvgb" method="POST">
                    <div className="form-group">
                        <label for="email">
                        Your email:
                        <input name="_replyto" type="email" className="form-control" placeholder="Enter email" id="email" size="200px" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                        Your name:
                        <input name="name" className="form-control" placeholder="Enter name" id="name" size="200px" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                        Your message:
                        <textarea name="message" className="form-control" placeholder="Enter message" id="message" width="500px" rows="2" cols="200" />
                        </label>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary">Submit</button>
                </form>
        </div>
    </section>
  );
}

export default Contact;