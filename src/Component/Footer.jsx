import React from 'react'
import '../Style/Style.css'
import { Image, Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   
      <Container  fluid>
        <Row className='footer' >
          <Col  style={{marginTop:'20px'}}>
            <Image className='slider' src={require('../images/logo.png')} style={{ width: 220}}/>
          </Col>
          <Col  style={{marginTop:'20px'}}>
            <Link className='nav-link my-2'> Our Company </Link>
            <Link className='nav-link my-2'>Our Locations</Link>
            <Link className='nav-link my-2'>Our Vehicles</Link>
            <Link className='nav-link my-2'>Contact Us</Link>
            <Link className='nav-link my-2'>Making a Booking User Guide</Link>

          </Col>
          <Col  style={{marginTop:'20px'}} >
          <Link className='nav-link my-2'> Vehicle Use Terms & Conditions</Link>
            <Link className='nav-link my-2'>Website Terms & Conditions</Link>
            <Link className='nav-link my-2'>Privacy Policy</Link>
            <Link className='nav-link my-2'>Cookies Policy</Link>
          </Col>
          <Row style={{textAlign:'center'}}>
          <Link className='nav-link my-2'>
          Copyright  &copy; 2024 R-cars – Panchywala jaipur • Powered by Rakesh Jaat
          </Link>
        </Row>
        </Row>
        
      </Container>

  )
}
