import { Container, Image, Row } from 'react-bootstrap';
import '../Style/Style.css';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home2 from './Home2';
import { Link } from 'react-router-dom';




export default function Home() {



  return (
    <>
      <Container style={{ marginTop: 80 }}  >
        <Row className='image-container'>

          <Image className='homeimg' src={require('../images/home.jpg')} />



        </Row>

        <Row className='blankbox '>
          <h1>Get to the Good Stuff</h1>
        </Row>
        <Row >
          <div className='btns' >
            <Button as={Link} to='/Locations' >Our Locations </Button>{' '}
            <Button variant="danger" >Book Now</Button>{' '}
            </div>

        </Row>

        <h1 style={{ textAlign: 'center' }}>Our Vehicles</h1>

      </Container>
      <Home2></Home2>
    </>

  );
}
