import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  const [showBox, setShowBox] = useState(false);
  const [formData, setFormData] = useState({
    bookingNo: '',
    couponNo: ''
  });
  const [expanded, setExpanded] = useState(false);
  
  const handleToggle = () => setExpanded(!expanded);
  const Close = () => setExpanded(false);

  const handleClick = () => {
    setShowBox(true);
  };

  const handleClose = () => {
    setShowBox(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      bookingNo: '',
      couponNo: ''
    });
    setShowBox(false);
  };

  return (
    <>
      <Navbar  expanded={expanded} expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Container>
          <Navbar.Brand to="#home">
            <Image className="slider" src={require('../images/logo.png')} style={{ width: 80 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"onClick={handleToggle} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link"  onClick={Close} to="/">Home</Link>
              <Link className="nav-link"  onClick={Close} to="/ourcompany">Our Company</Link>
              <Link className="nav-link" onClick={Close}  to="/Locations">Our Locations</Link>
              <Link className="nav-link" onClick={Close}  to="/Vehicles">Our Vehicles</Link>
              <Link className="nav-link" onClick={Close}  to="/Contact">Contact Us</Link>
              <span className="nav-link" style={{cursor:'pointer'}}  onClick={handleClick}>Manage Booking</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showBox && (
        <div className="center-box">
          <button className="close-button" onClick={handleClose}><strong>X</strong></button>
          <h2>Manage Booking</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Booking No:
                <input
                  type="text"
                  name="bookingNo"
                  className="my-3"
                  placeholder="Enter your booking number"
                  value={formData.bookingNo}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Coupon No:
                <input
                  type="text"
                  name="couponNo"
                  placeholder="Enter your coupon number"
                  value={formData.couponNo}
                  onChange={handleChange}
                />
              </label>
            </div>
            <Button type="submit" variant="primary" className="my-3 d-flex justify-content-end">Manage</Button>
          </form>
        </div>
      )}
    </>
  );
}
