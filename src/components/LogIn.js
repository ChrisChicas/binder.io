// Component for the log in screen
import { Form, Button, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LogIn(props){
    const [inputUserId, setInputUserId] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [badAttempt, setBadAttempt] = useState(false)
    const navigate = useNavigate()
    const credentialsCheck = e => {
        e.preventDefault()
        // temp credential check logic logic below
        if(inputUserId !== "" && inputPassword !== ""){
            // insert credential check logic here, thinking an if-else statement to match inputUserId and a findone from database, then check password?
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
            {badAttempt ? <Alert variant="danger">Incorrect username or password. Please try again.</Alert> : null}
            <h1>Log In</h1>
            <Form onSubmit={credentialsCheck}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={inputUserId} onChange={e => {setInputUserId(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Check.Label>Password</Form.Check.Label>
                    <Form.Control type="password" placeholder="Enter password" value={inputPassword} onChange={e => {setInputPassword(e.target.value)}}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit   
                </Button>
            </Form>    
        </div>
    )
}