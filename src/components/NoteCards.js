// Component meant to fit into BinderView.js, displaying Notes and a portion of their contents as cards.

//imports
import {React, useState, useEffect} from 'react';
import {Card, Button, Container} from 'react-bootstrap';
import CreateNote from './CreateNote'
//function
export default function NoteCards(props){
    const [notes, setNotes] = useState([])
    let cards
    if (notes){
        cards = notes.map((note, index) => {
            return(
              <Card key={index}>
                <Card.Title>{note.createdAt}</Card.Title>
                <Card.Body>
                    {note.noteContent}
                    <div style={{marginTop: "5px"}}>
                        <Button style={{marginRight: "5px"}} className="mb-3" size="sm" variant="primary">Edit</Button>
                        <Button className="mb-3" size="sm" variant="danger">Delete</Button>   
                    </div>
                </Card.Body>
                
            </Card>  
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
    
    return (
           <Container>
               {cards}
               <CreateNote binderId={props.binderId} getNotes={getNotes}/>
           </Container> 
            
        
    )
}