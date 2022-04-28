// Component for the log in screen
//imports
import React from 'react';
import {Form, Button} from 'react-bootstrap';
export default function LogIn(){
    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control placeholder="Enter UserName"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Enter password"/>
                </Form.Group>
            </Form>
        </div>
    )
}