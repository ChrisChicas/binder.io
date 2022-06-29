import { Form, Button, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LogIn(props: { setLoggedIn: (arg0: boolean) => void; setUserId: (arg0: any) => void; }){
    const [inputUserName, setinputUserName] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [badAttempt, setBadAttempt] = useState(false)
    const navigate = useNavigate()
    const credentialsCheck = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try {
            const userResponse = await fetch(`https://binder-io-api.herokuapp.com/usertables/name/${inputUserName}`,{
                method : "GET",
                headers: {"Content-Type":"application/json"}
            })
            const userData = await userResponse.json()
            if(inputPassword === userData.password){
                props.setLoggedIn(true)
                props.setUserId(userData.userId)
                navigate("/binder")
            } else{
                setBadAttempt(true)
                setinputUserName("")
                setInputPassword("")
            }   
        } catch (error) {
            console.log(error)
            setBadAttempt(true)
            setinputUserName("")
            setInputPassword("")  
        }
        
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