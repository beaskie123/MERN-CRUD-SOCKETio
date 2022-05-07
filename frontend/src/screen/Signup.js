import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Row, Col, Container} from 'react-bootstrap'
import {Helmet} from 'react-helmet'

export default function Signup() {
  return (
    <div className='signup-main'>
      <Helmet>
          <title>Sign Up</title>
      </Helmet>

      <Container className="signup-screen">
      <Form>
        <p>
        <h1 class="text-center">Create an Account</h1>
        </p>
        <Row className='mt-3`'>
          <Form.Group as={Col} >
            <Form.Label>First Name</Form.Label>
            <Form.Control  placeholder='Enter your Firstname' />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder='Enter your Lastname' />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Password</Form.Label>
          <Form.Control  type="password" placeholder="Enter Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Let's get started
        </Button>
      </Form>
      </Container>
    </div>
  )
}
