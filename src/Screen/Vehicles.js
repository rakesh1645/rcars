import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { cars } from '../data/data';
import { useNavigate } from 'react-router-dom';


export default function Vehicles() {

  const [Cars, setCars] = useState('')
  const nav = useNavigate()
  useEffect(() => {
    setCars(cars);
  }, [])


  return (
    <Container className='vehiclesjs'>
      <h1 style={{ textAlign: 'center', backgroundColor: '#FFF', padding: '20px', margin: '20px' }}>
        Our Vehicles
      </h1>
      <Row >
        {Cars && Cars.map((value,index) => (
          <Col lg={4} md={6} sm={12} key={index}>
            <Card style={{ margin: '5px' }}>
              <Card.Img variant="top" src={value.img} />
              <Card.Body>
                <Card.Title>{value.name}</Card.Title>

                <Button variant="dark">Rent Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}


      </Row>

    </Container>
  )
}
