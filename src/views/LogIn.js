// Component for the log in screen
//imports
import React from 'react';
import {Container} from 'react-bootstrap';
import LogInForm from '../components/LogInForm'

export default function LogIn(){
    return(
        <div>
            <Container>
                <LogInForm/>
            </Container>
        </div>
    )
}