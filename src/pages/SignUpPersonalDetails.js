import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import { Outlet, Link } from "react-router-dom";



const SignUpPersonalDetails = () => {
  return (
    <>

      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className=" my-4 mx-4">
                  <h2 className="fw-bold text-uppercase mb-2 text-center">POLZET</h2>
                  <p className="mb-3 text-center">Sign in to explore the world of POLLS </p>
                  <Form className="mb-3">
                    <div className="row">
                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">First Name</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                      </div>
                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Last Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                      </div>
                      <div className="col-md-6">                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Date of Birth</Form.Label>
                          <Form.Control type="" placeholder="00/00/0000" />
                        </Form.Group>
                      </div>
                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">Gender</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                      </div>
                      <div className="col-md-12">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                      </div>
                      <div className="col-md-12">
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Gender</Form.Label>
                          <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                      </div>
                      

                    </div>


                    





                   


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
                        <Link className="login-info-forgot-pass" to="/Forgot"> Forgot password?</Link>
                      </p>
                    </div>
                    <div className="d-grid">
                      <Button className="login-info-btn" type="submit">
                      Sign Up
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0 text-center">
                      Don't have an account?
                     
                      <Link className="signup-info fw-bold" to="/SignUp">login</Link>

                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Outlet />

    </>
  )
};

export default SignUpPersonalDetails;