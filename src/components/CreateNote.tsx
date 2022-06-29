// Component for creating a new note
import React, {useState} from 'react'
import {Card, Form, Button} from 'react-bootstrap'


//Component requires the binderId be passed as a prop. This should only be rendered INSIDE the binderTabs function for this reason. 
export default function CreateNote(props: { binderId: any; setUpdate: (arg0: boolean) => void; update: any }){
    //useState to hold newNoteContent variable
    const [newNoteContent, setNoteContent] = useState('')
    //requirement check
    async function requirementCheck(e: { preventDefault: () => void; }){
        e.preventDefault()
        //if newNoteContent is not empty, run a fetch request, method POST, body including bindername and userId
        if(newNoteContent !== ""){
            //new date to pass as createdAt and updatedAt arguments
            let date = new Date()
            //cannot directly insert props.binderId into JSON object
            let binderId = props.binderId
            await fetch(`https://binder-io-api.herokuapp.com/notes/`,{
                    method : 'POST',
                    headers : {"Content-Type":"application/json"},
                    body : JSON.stringify({binderId: binderId ,
                        noteContent : newNoteContent,
                        createdAt : date.toUTCString(),
                        updatedAt : date.toUTCString()})
            })
            props.setUpdate(!props.update)
            setNoteContent("")
        }
    }

    return(
        <Card>
            <Card.Body>
                <Card.Title>Create New Note</Card.Title>
                <Form onSubmit={requirementCheck}>
                    <Form.Group>
                        <Form.Label>Note Text</Form.Label>
                        <Form.Control type="text" placeholder="type your note!" value={newNoteContent} onChange={e => {setNoteContent(e.target.value)}}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
            </Form>
            </Card.Body>
        </Card>
    )
}