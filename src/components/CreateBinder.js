// Component for creating a new binder screen

//imports
import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function CreateBinder(){
    //submitURL should be the POST Binder route for the API 
    const submitURL = ""
    return(
        <div>
            <Form onSubmit={submitURL}>
                <Form.Group>
                    <Form.Label>Binder Name</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    )
}