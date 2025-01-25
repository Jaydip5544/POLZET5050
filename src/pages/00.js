import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import { Outlet, Link } from "react-router-dom";



const login = () => {
  return (
    <>
    
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className=" my-4 mx-4">
                  <h2 className="fw-bold text-uppercase mb-2 text-center">POLZET1</h2>
                  <p className="mb-3 text-center">Sign in to explore the world of POLLS </p>
                  <Form className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="mb-3 d-flex justify-content-between mb-4">
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label">Check me out</label>
                      </div>
                      <p className="small">
                        <a className="login-info-forgot-pass" href="#!">
                          Forgot password?
                        </a>
                      </p>
                    </div>
                    <div className="d-grid">
                      <Button className="login-info-btn" type="submit">
                        Sign in1
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0 text-center">
                      Don't have an account?
                      <a to="/SignUpPersonalDetails" className="signup-info fw-bold">
                        Sign Up
                      </a>

                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
 
    </>
  )
  };
  
  export default login;