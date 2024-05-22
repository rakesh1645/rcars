import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image, Accordion } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { First } from 'react-bootstrap/esm/PageItem';
import { useLocation, useNavigate } from 'react-router-dom';


export default function Details() {
    const navigate = useNavigate();
    const location = useLocation();
    const [carDetails, setCarDetails] = useState({});
    const [img, setImage] = useState('');

    
    useEffect(() => {
        if (location.state) {
            setCarDetails(location.state);
            // setImage(location.state.img);
        }
    }, [location.state]);
    // function ImageChange(newImg) {
    //     setImage(newImg);
    // }
    function ImageChange(newImg) {
        setImage(newImg);
    }
  
  return (
    <Container>
            <Row>
                <Col lg={6}>
                    <Image fluid src={img ? img : carDetails.img} />
                    <Row>
                        {carDetails&&carDetails.map((img, index) => (
                            <Col key={index} onClick={() => ImageChange(img)}>
                                <Image src={img} style={{ width: 80, height: 100, cursor: 'pointer' }} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col lg={6}>
                    <Row>
                        <Col><p>{carDetails.name || "Product Name"}</p></Col>
                        <Col><p>Rs. {carDetails.price || "1,399.00"}</p></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src={require('../images/1.png')} style={{ width: 20 }} />
                            <Image src={require('../images/1.png')} style={{ width: 20 }} />
                            <Image src={require('../images/1.png')} style={{ width: 20 }} />
                            <Image src={require('../images/1.png')} style={{ width: 20 }} />
                            <Image src={require('../images/1.png')} style={{ width: 20 }} />
                            <span>23 reviews</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Size</p>
                        </Col>
                        <Row>
                            <Col>
                                <Button variant="outline-primary">S</Button>{'  '}
                                <Button variant="outline-primary">M</Button>{'  '}
                                <Button variant="outline-primary">L</Button>{'  '}
                                <Button variant="outline-primary">XL</Button>{'  '}
                                <Button variant="outline-primary">XXL</Button>{'  '}
                                <Button variant="outline-primary">XXXL</Button>{'  '}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item style={{ marginTop: 10 }} eventKey="0">
                                        <Accordion.Header>Size Chart</Accordion.Header>
                                        <Accordion.Body>
                                            <Image src={require('../images/1.png')} /> 
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ marginTop: 5 }}>Colours</p>
                                <Button variant="primary" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="secondary" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="success" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="warning" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="danger" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="info" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="light" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="dark" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="link" style={{ width: 30, height: 30 }}></Button>{' '}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="m-2" variant="primary" style={{ width: "100%", height: 30 }} >Add to cart</Button>{' '}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="m-2" variant="primary" style={{ width: "100%", height: 30 }}>Buy now</Button>{' '}
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>BestSeller</h1>
                </Col>
               
            </Row>
        </Container>
    
  )
}
