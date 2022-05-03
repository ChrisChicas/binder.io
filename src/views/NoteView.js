//Viewing and Editing page for notes.

//imports
import {React} from 'react'
import {Form, Container} from 'react-bootstrap'

export default function NoteView(props){
    return (
        <Container>
            <h2>Note Viewer</h2>
            <h2>{props.title}</h2>
            <Form>
            <Form.Group>
                <Form.Label>

                </Form.Label>
            </Form.Group>
            </Form>

        </Container>
        
    )
}