// Component for the sign up screen
import { Form, Button, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp(props){
    const [inputUserName, setinputUserName] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [badAttempt, setBadAttempt] = useState(false)
    const navigate = useNavigate()
    const requirementsCheck = async (e) => {
        e.preventDefault()
        const userResponse = await fetch(`https://binder-io-api.herokuapp.com/usertable/${inputUserName}`)
        const userData = await userResponse.json()
        if(inputUserName !== "" && inputPassword !== ""){
            login(userData.UserId)
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
            {badAttempt ? <Alert variant="danger">Username or password do not meet requirements. Please try again.</Alert> : null}
            <h1>Sign Up</h1>
            <Form onSubmit={requirementsCheck}>
                <Form.Group className="mb-3" controlId="formCreateUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={inputUserName} onChange={e => {setinputUserName(e.target.value)}}/>
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