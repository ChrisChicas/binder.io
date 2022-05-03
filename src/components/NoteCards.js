// Component meant to fit into BinderView.js, displaying Notes and a portion of their contents as cards.

//imports
import {React} from 'react';
import {Card} from 'react-bootstrap';

//function
export default function NoteCards(props){
    const display = props.notes.map((note)=>{
        const preview = note.noteContent
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{note.NoteTitle}</Card.Title>
                    <Card.Subtitle className="text-muted">{note.dateCreated}</Card.Subtitle>
                    <Card.Text>
                        {preview}
                    </Card.Text>
                    <Card.Link href={`/note/${note.noteID}`}>View</Card.Link>
                    <Card.Link href={`/note/${note.noteID}/edit`}>Edit</Card.Link>
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