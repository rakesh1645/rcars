import React, { useState } from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import '../Style/Style.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    fullname: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({
      name: '',
      fullname: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    });
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <h1 style={{ marginTop: '100px', backgroundColor: '#FFF', padding: '15px', textAlign: 'center' }} className='container'>
        Contact Us
      </h1>
      <Container>
        <div className='Main'>
          <div className='form'>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"required
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridFullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"required
                    name='fullname'
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  name='address'required
                  value={formData.address}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  placeholder="Apartment, studio, or floor"
                  name='address2'required
                  value={formData.address2}
                  onChange={handleChange}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    name='city'required
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select
                    name='state'required
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option value="jaipur">Jaipur</option>
                    <option value="udaipur">Udaipur</option>
                    <option value="jodhpur">Jodhpur</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    name='zip'required
                    value={formData.zip}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="danger" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className='address'>
            <div className='box1'>
              <p>Head Office</p>
              <hr />
              <p>
                Corner of Cameron Road & Waigani Drv Gordons
                Boroko Motors Building
                P.O.Box 1259, Boroko
                National Capital District
                Papua New Guinea
                Tel: (675) 323 6244
                Mobile: (675) 72235584
                Fax: (675) 323 1390
                Email: reservations@R-car Hub.com.pg
                Website: www.R-car Hub.com.pg
              </p>
            </div>
            <div className='box2'>
              <p>Branches</p>
              <hr />
              <p>
                Corner of Cameron Road & Waigani Drv Gordons
                Boroko Motors Building
                P.O.Box 1259, Boroko
                National Capital District
                Papua New Guinea
                Tel: (675) 323 6244
                Mobile: (675) 72235584
                Fax: (675) 323 1390
                Email: reservations@R-car Hub.com.pg
                Website: www.R-car Hub.com.pg
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
