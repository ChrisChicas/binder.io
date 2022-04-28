// Component for the sign up screen
import { Form, Button } from "react-bootstrap"

export default function SignUp(){
    return(
        <div className="center">
            <Form>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Check.Label>Password</Form.Check.Label>
                    <Form.Control type="password" placeholder="Enter password"/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>    
        </div>
    )
}