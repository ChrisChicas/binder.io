// Component for the sign up screen
import { Form, Button, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp(props){
    const [inputUserId, setInputUserId] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [badAttempt, setBadAttempt] = useState(false)
    const navigate = useNavigate()
    const requirementsCheck = e => {
        e.preventDefault()
        // temp requirements check logic logic below
        if(inputUserId !== "" && inputPassword !== ""){
            // we can define username and password requirements and if they meet the reqs their user data is inserted into the database and they log in
            login()
        } else{
            setBadAttempt(true)
            setInputUserId("")
            setInputPassword("")
        }
      }

      const login = () => {
        props.setLoggedIn(true)
        navigate("/binder")
    }

    
    return(
        <div className="center">
            {badAttempt ? <Alert variant="danger">Username or password do not meet requirements. Please try again.</Alert> : null}
            <h1>Sign Up</h1>
            <Form onSubmit={requirementsCheck}>
                <Form.Group className="mb-3" controlId="formCreateUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={inputUserId} onChange={e => {setInputUserId(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCreatePassword">
                    <Form.Check.Label>Password</Form.Check.Label>
                    <Form.Control type="password" placeholder="Enter password" value={inputPassword} onChange={e => {setInputPassword(e.target.value)}}/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>    
        </div>
    )
}