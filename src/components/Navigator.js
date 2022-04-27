import React from "react";
import {Nav, Navbar, Button} from "react-bootstrap";
export default function TopBar(props){
        if(props.userID == null){
            return (
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">
                        <p>
                           Binder.io</p>
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#logIn">
                                <Button variant="Light">
                                    Log In
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="#SignUp">
                                <Button variant="success">
                                    Sign Up
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
            )

        }else{
            
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                        <p>
                           Binder.io</p>
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#SignUp">
                                <Button variant="success">
                                    Sign Out
                                </Button>
                            </Nav.Link>
                        </Nav> 
                </Navbar>
            </div>
        }
        
}