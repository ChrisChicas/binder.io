// Component for the sign up screen

//imports
import {React, useState} from 'react';
import {Form, Button} from 'react-bootstrap';

export default function SignUp(){
    const [validated,setValidated] = useState(false)
    const handleSubmit = (e) => {
        const form = e.currentTarget
        if (form.checkValidity()===false){
            e.preventDefault()
            e.stopPropagation()
        }
        setValidated(true)
    }

    return(
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="" placeholder="enter a username"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="enter a password"/>
                </Form.Group>  
            </Form>
        </div>
    )
}