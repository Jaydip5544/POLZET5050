import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import { Outlet, Link } from "react-router-dom";



const Forgot = () => {
    return  <Container>
    <Row className="vh-100 d-flex justify-content-center align-items-center">
      <Col md={8} lg={6} xs={12}>
        <Card className="shadow">
          <Card.Body>
            <div className=" my-4 mx-4">
              <h2 className="fw-bold text-uppercase mb-2 text-center">POLZET1</h2>
              <p className="mb-3 text-center">Sign in to explore the world of POLLS </p>
              <Form className="mb-3 input-otp-email-info">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-center">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <button id="generateBtn"  className="Generate-otp-btn">
                      Generate OTP
                  </button>
                </Form.Group>

                  <div class="col-md-12">           
                    <div class="otp-field mb-4">
                      <input type="number" />
                      <input type="number" disabled />
                      <input type="number" disabled />
                      <input type="number" disabled />
                      <input type="number" disabled />
                      <input type="number" disabled />
                    </div>
                  </div>

                

                <div className="mb-3 d-flex justify-content-between mb-4">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">Remember me</label>
                  </div>                       
                </div>
                <div className="d-grid">
               
                  <Link className="login-Verify-info-btn" to="/SignUpPersonalDetails">Verify</Link>
                </div>
              </Form>
           
            </div>


          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>;
  };
  
  export default Forgot;
