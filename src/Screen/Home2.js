import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Style/Style.css';
import { home } from '../data/data';


export default function Home2() {
    return (

        <Container className='ourvehicles'>
 <Row>
    {
        home&&home.map((a,index)=>(
            <Col lg={3} md={6} sm={12} key={index}>
             <Card  >
            <Card.Img variant="top" src={a.img} />
            <Card.Body>
                <Card.Title>{a.name}</Card.Title>
                <Card.Text>
   
                    Second Hand Audi Q2 Premium 40 TFSI quattro in Jaipur 211
                    2021 Audi Q2 Premium 40 TFSI quattro. Contact for us 
                </Card.Text>
                <Button variant="dark">Rent Now</Button>
            </Card.Body>
        </Card>
        </Col>
           
        ))
        
    }

 </Row>
           
            
        </Container>


    )
}
