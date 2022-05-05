// Component meant to fit into BinderView.js, displaying Notes and a portion of their contents as cards.

//imports
import {React, useState, useEffect, Fragment} from 'react';
import {Card, Button, Container, Modal, Form} from 'react-bootstrap';
import CreateNote from './CreateNote'
import EditNote from './EditNote'
//function
export default function NoteCards(props){
    const [notes, setNotes] = useState([])
    
    let cards
    if (notes){
        cards = notes.map((note, index) => {
            return(
                <Fragment>
                <Card key={index}>
                    <Card.Title>{note.createdAt}</Card.Title>
                    <Card.Body>
                        {note.noteContent}
                        <div style={{marginTop: "5px"}}>
                            <EditNote note={note} />
                            <Button className="mb-3" size="sm" variant="danger" onClick={() => deleteNote(note.noteId)}>Delete</Button>   
                        </div>
                    </Card.Body>
                    
                </Card>
                
            </Fragment>  
            )
        })
    }

    useEffect(()=>{
        getNotes()
    },[])

    const getNotes = async ()=>{
        let response = await fetch(`https://binder-io-api.herokuapp.com/notes/binder/${props.binderId}`)
        let data = await response.json()
        setNotes(data)
    }

    const deleteNote = async (noteId) => {
        await fetch(`https://binder-io-api.herokuapp.com/notes/${noteId}`,
            {method : 'DELETE',
            headers:{"Content-Type":"application/json"}                        
        })
    }

   

    return (
           <Container>
               {cards}
               <CreateNote binderId={props.binderId} getNotes={getNotes}/>
           </Container> 
            
        
    )
}