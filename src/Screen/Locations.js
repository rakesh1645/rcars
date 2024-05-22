import React from 'react'
import { Container,Card,Row,Col,Button } from 'react-bootstrap'
import { location } from '../data/data'


export default function Locations() {
  return (
    <>
    
    <Container className='locationbg' fluid>
    <h1 style={{ textAlign:'center', backgroundColor:'#FFF', padding:'20px', margin:'20px'} }>
      Our Locations
    </h1>
    <Row >
        {location && location.map((value,index) => (
          <Col  lg={4} md={6} sm={12} key={index}>
            <Card style={{  margin:'5px' }}>
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
    </>
  )
}
