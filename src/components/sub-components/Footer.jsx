import React from 'react'
import "../../styles/Home.css"

const Footer = () => {
  return (
    <footer className="contact">
      <div className='foot'>
      <div className="container">
            <h3>Contact Us</h3>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="5" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className='address'>
            <h3>Visit Us</h3>
            <p>123 Main Street</p>
            <p>City, State 12345</p>
            <p>United States</p>
            </div>
            <div>
            <h3>Phone</h3>
            <p>(123) 456-7890</p>
            <h3>Email</h3>
            <p>info@yourcompany.com</p>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer;