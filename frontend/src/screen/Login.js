import React, { useState } from 'react'
import Axios from 'axios'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Login() {

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

const submitHandler = async (e) => {
    e.preventDefault();
    try {
        const { data } = await Axios.post('/api/users/signin', {
            email,
            password,
        })
        console.log(data)
    } catch (err) {
    }
}

  return (
      <div className='main-container'>
            <Container className='small-container'>
                <Helmet>
                    <title>Sign In</title>
                </Helmet>
                <p className='p-edit text-center'> Welcome to <span>Babble Space</span></p>
                <Form onSubmit={submitHandler}>
                    <Form.Group className='mb-3' controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' required onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' required onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <div>
                        <Button className='mb-3' type="submit">Sign In</Button> <br/>
                        Don't have an account yet ? <Link to={`/Signup`}> Sign up </Link>
                    </div>
                </Form>
            </Container>
    </div>
  )
}
