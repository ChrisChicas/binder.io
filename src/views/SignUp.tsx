// Component for the sign up screen
import { Form, Button, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp(props: { setLoggedIn: (arg0: boolean) => void; setUserId: (arg0: any) => void; }){
    const [inputUserName, setinputUserName] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [badAttempt, setBadAttempt] = useState(false)
    const [errMessage, setErrMessage] = useState("")
    const navigate = useNavigate()

    const requirementsCheck = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        if(inputUserName !== "" && inputPassword !== ""){
            const response = await fetch('https://binder-io-api.herokuapp.com/usertables/',
                {method : 'POST',
                headers:{"Content-Type":"application/json"},
                body : JSON.stringify({
                    userName : inputUserName,
                    password : inputPassword,
                    displayName : inputUserName
                })
            })
            const resData = await response.json()
            props.setLoggedIn(true)
            props.setUserId(resData.data.userId)
            navigate("/binder")    
        } else{
            setBadAttempt(true)
            setinputUserName("")
            setInputPassword("")
            setErrMessage("Username and password cannot be blank.")
        }
      }

    return(
        <div className="center">
            {badAttempt ? <Alert variant="danger">{errMessage}</Alert> : null}
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