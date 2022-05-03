// Component for the sign up screen
import { Form, Button, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp(props){
    const [inputUserName, setinputUserName] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [badAttempt, setBadAttempt] = useState(false)
    const [errMessage, setErrMessage] = useState("")
    const navigate = useNavigate()
    const newUserData = {
        UserName : inputUserName,
        Password : inputPassword,
        DisplayName : inputUserName        
    }

    const requirementsCheck = async (e) => {
        e.preventDefault()

        if(inputUserName !== "" && inputPassword !== ""){
            signUp()
            
            
                
        } else{
            setBadAttempt(true)
            setinputUserName("")
            setInputPassword("")
            setErrMessage("Username and password cannot be blank.")
        }
      }

      async function signUp(){
          //fetch request to POST new user to usertable
          await fetch('https://binders-io-api.herokuapp.com/usertable/',
            {
                method : 'POST',
                body : JSON.stringify(newUserData),                
            })
            .then(data => data.json())
            .then(data => {
                props.setLoggedIn(true)
                props.setUserId(data.userId)
                navigate("/binder")
            })
            .catch(err =>{
              console.log('ERROR' , err)
              setErrMessage('Server Communication error, please try again')
            })
        
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