import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import './Footer.css';
import '../App.css'

function Footer() {
  return (
    <footer id="footer" className="">
    <div className="text-light pt-3">
        <div className="container-fluid row text-lg-left text-center justify-content-center">
            <div className="pl-4 pt-2">
                <h4>Newsletter</h4>
            <p>Lets keep in touch!</p>
            </div>
            <div className="pl-5 pr-2 border-right">
            <form>
                <label for="email">
                    <input name="_replyto" type="email" className="form-control" placeholder="Enter email" id="email" size="25px" />
                </label>
                <button onSubmit="event.preventDefault()" type="submit" className="btn btn-block btn-secondary">Subscribe</button>
            </form>
            </div>
                <div className="row fa-2x pt-3 pl-4">
                    <div className="px-3">
                        <a href="https://www.facebook.com/UpsidexDownApparel"><i className="fab fa-facebook-square"></i></a>
                    </div>
                    <div className="px-3">
                        <a href="https://www.instagram.com/upsidexdownapparel/"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="px-3">
                        <a href="https://twitter.com/uxdapparel"><i className="fab fa-twitter-square"></i></a>
                    </div>    
                </div>
            </div>
            <br />
            <br />
        </div>
        <div className="container row pt-3 fa-sm border-top border-light justify-content-center mx-auto">
            <div>
            <ul id="legal">
                <li>
                    <i class="far fa-copyright"></i> 2021 Upside x Down.
                </li>
            </ul>
            </div>
            <div>
            <ul id="legal">
                <li className="pr-3">
                    <span title="Checkout Powered by Stripe"><i class="fab fa-stripe"></i></span>
                </li>
                <li className="pr-3">
                    <span title="Visa"><i className="fab fa-cc-visa"></i></span>
                </li>
                <li className="pr-3">
                    <span title="MasterCard"><i className="fab fa-cc-mastercard"></i></span>
                </li>
                <li className="pr-3">
                    <span title="American Express"><i className="fab fa-cc-amex"></i></span>
                </li>
                <li className="pr-3">
                    <span title="Discover"><i className="fab fa-cc-discover"></i></span>
                </li>
                <li className="pr-3">
                    <span title="JCB"><i className="fab fa-cc-jcb"></i></span>
                </li>
            </ul>
        </div>
    </div>
</footer>
  );
}

export default Footer;
