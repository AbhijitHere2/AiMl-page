import React from 'react';
import './Footer.css'; 

const Footer = () => (
  <>
    <footer className=" footer mx-auto p-5 md:px-4  lg:px-6 font-inter bg-black text-white py-8">
      <div className="newsletter">
        <h2>Hubnex Educate</h2>
        <p>Sign up for our Newsletter</p>
        <form className=" boxss mt-3 ">
              <input
                type="text"
                placeholder="Enter your email"
                className="border px-3 py-2 w-full rounded"
              />
              
            </form>
      </div>
      <hr />
      <div className="footer-info">
        <div className="company-info">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#privacy">Privacy policy</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
        <div className="support">
          <h3>Support</h3>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
        </div>

{/* .................................................................................................. */}
        <div className="support">
          <h3>Socials</h3><br/>
          <ul  className="flex space-x-4">
           <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
           <a href="https://www.linkedin.com/company/hubnex/mycompany/"><i class="fa-brands fa-linkedin"></i></a>
           <a href="https://x.com/?lang=en&lang=en"><i class="fa-brands fa-square-x-twitter"></i></a>
          </ul>
        </div>
      </div>
      {/* .................................................................................................. */}

    </footer>
    <div className="footer-bottom">
      <p>2024 Hubnex Educate. All rights reserved.</p>
    </div>
  </>

)

export default Footer;
