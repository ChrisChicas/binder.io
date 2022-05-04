// Component for the log in screen
import { Form, Button, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default async function LogIn(props){
    const [inputUserName, setinputUserName] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [badAttempt, setBadAttempt] = useState(false)
    const navigate = useNavigate()
    const credentialsCheck = async (e) => {
        e.preventDefault()
        const userResponse = await fetch(`https://binder-io-api.herokuapp.com/usertable/name/${inputUserName}`,{
            method : "GET"
        })
        const userData = await userResponse.json()
        if(inputPassword == userData.Password){
            login(userData.userId)
        } else{
            setBadAttempt(true)
            setinputUserName("")
            setInputPassword("")
        }
      }

    const login = userId => {
        props.setLoggedIn(true)
        props.setUserId(userId)
        navigate("/binder")
    }

    return(
        <div className="center">
            {badAttempt ? <Alert variant="danger">Incorrect username or password. Please try again.</Alert> : null}
            <h1>Log In</h1>
            <Form onSubmit={credentialsCheck}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={inputUserName} onChange={e => {setinputUserName(e.target.value)}}/>
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