

import React from 'react'
import "./FooterLinks.css"
import {SlSocialFacebook,SlSocialTwitter,SlSocialInstagram} from "react-icons/sl"
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
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">C</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  UI Design
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Android</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Templates</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
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
                <a className="facebook" href="#">
                <SlSocialFacebook />
                </a>
              </li>
             
              <li>
                <a className="dribbble" href="#">
                  <SlSocialInstagram/>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
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
