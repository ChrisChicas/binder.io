// Component meant to fit into BinderView.js, displaying Notes and a portion of their contents as cards.

//imports
import {React, useState, useEffect} from 'react';
import {Card, Button, Container} from 'react-bootstrap';
import CreateNote from './CreateNote'
//function
export default function NoteCards(props){
    const [notes, setNotes] = useState([])
    const cards = []
    
    useEffect(()=>{
        getNotes()
        console.log(notes)
        if(notes.length > 0){
            cards = notes.map((note)=>{
                return (
                    <Card>
                        <Card.Title>{note.dateCreated}</Card.Title>
                        <Card.Body>
                            {note.noteContent}
                        </Card.Body>
                        <Button variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>
                    </Card>
                )
            })//end .map function
        }
    },[])
    const getNotes = async ()=>{
        let response = await fetch(`https://binder-io-api.herokuapp.com/notes/binder/${props.binderId}`)
        let data = response.json()
        setNotes(data)
    }
    return (
           <Container>
               <CreateNote binderId={props.binderId}/>
               {notes.length > 0 && cards}
           </Container> 
            
        
    )
}