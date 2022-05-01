//Navigation Bar

//imports
import React from "react";
import {Nav, Navbar, Button} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Header(props){
    const navigate = useNavigate()
    const signOut = () => {
        props.setLoggedIn(false)
        props.setLoggedOut(true)
        navigate("/")
    }
        if(props.loggedIn == false){
            return (
                    <div>
                        <Navbar bg="light" expand="lg">
                            <LinkContainer to="/">
                                <Navbar.Brand>
                                    <p>Binder.io</p>
                                </Navbar.Brand>
                            </LinkContainer>
                            <Nav>
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        <Button variant="Light">
                                            Log In
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/signup">
                                    <Nav.Link>
                                        <Button variant="success">
                                            Sign Up
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar>
                    </div>
            )

        }else{
            return(
                <div>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                            <p>
                                Binder.io</p>
                            </Navbar.Brand>
                            <Nav>
                                <Nav.Link>
                                    <Button variant="success" onClick={signOut}>
                                        Sign Out
                                    </Button>
                                </Nav.Link>
                            </Nav> 
                    </Navbar>
                </div>  
            )
            
        }
        console.log("Navigator loaded")
        
}