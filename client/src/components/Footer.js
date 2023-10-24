

import React from 'react'
import "./FooterLinks.css"
import {SlSocialFacebook,SlSocialTwitter,SlSocialInstagram} from "react-icons/sl"
import {AiFillHome} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import{BsFillTelephoneFill}from 'react-icons/bs'
export default function Footer() {
  return (
    
    
    <footer className="site-footer" style={{marginTop:"200px",backgroundColor:"#e2e3e5"}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About us</h6>
            <p className="text-justify" style={{width:"85%"}}>
            Pets Home is the leading specialist retailer of pet goods, accessories and aquatics in Tunisia.
            We are dedicated to bringing joy to the lives of pets and their pet parents every single day.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Shop by pets</h6>
            <ul className="footer-links">
              <li>
                <a href="/cat">Cat</a>
              </li>
              <li>
                <a href="/dog">
                  Dog
                </a>
              </li>
              <li>
                <a href="/bird">
                  Bird
                </a>
              </li>
              <li>
                <a href="/fish">
                 Fish
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
            <li>
                <a href="/">Home</a>
              </li>
              
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a style={{textDecoration:"underline"}}>Contact Us:
                </a>
              </li>
              <li>
                <BsFillTelephoneFill/>+216 92 645 362<br/>
              <AiFillHome/> Ben Arous, Mourouj6 <br/>
              <MdEmail/>boulila.yas2002@gmail.com
              </li>
             
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright © 2023 - Pets Home
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="https://www.facebook.com/yasmina.boulila/">
                <SlSocialFacebook />
                </a>
              </li>
             
              <li>
                <a className="dribbble" href="https://www.instagram.com/boulila_yasmine/">
                  <SlSocialInstagram/>
                </a>
              </li>
              <li>
                <a className="linkedin" href="https://twitter.com/YasmineB2002">
                <SlSocialTwitter/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  
  
  )
}
