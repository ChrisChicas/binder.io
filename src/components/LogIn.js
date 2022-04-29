// Component for the log in screen
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LogIn(props){
    const [inputUserId, setInputUserId] = useState("")
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        props.setUserID(inputUserId)
        navigate("/binder")
      }

    return(
        <div className="center">
            <h1>Log In</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={e => {setInputUserId(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Check.Label>Password</Form.Check.Label>
                    <Form.Control type="password" placeholder="Enter password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit   
                </Button>
            </Form>    
        </div>
    )
}