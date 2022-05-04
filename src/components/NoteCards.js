// Component meant to fit into BinderView.js, displaying Notes and a portion of their contents as cards.

//imports
import {React} from 'react';
import {Card, Button} from 'react-bootstrap';

//function
export default async function NoteCards(props){
    let response = await fetch(`https://binder-io-api.herokuapp.com/notetable/binder/${props.binderId}`,{
        method : "GET"
    })
    let notes = response.json()
    const display = notes.map((note)=>{
        const preview = note.noteContent
        return (
            <Card>
                <Card.Body>
                    <Card.Subtitle className="text-muted">{note.dateCreated}</Card.Subtitle>
                    <Card.Text>
                        {preview}
                    </Card.Text>
                    <Card.Link href={`/note/${note.noteId}`}>
                        <Button>
                           Edit
                        </Button>
                    </Card.Link>
                    <Card.Link href={`/note/${note.noteId}/edit`}>
                        <Button>
                            Delete
                        </Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        )

    })

    return (
            <div>
                {display}
            </div>
            
        
    )
}