// Component meant to fit into BinderView.js, displaying Notes and a portion of their contents as cards.

//imports
import {React, useState, useEffect, Fragment} from 'react';
import {Card, Button, Container} from 'react-bootstrap';
import CreateNote from './CreateNote'

//function
export default function NoteCards(props){
    const [notes, setNotes] = useState([])
    const [update, setUpdate] = useState(false)
    const [description, setDescription] = useState({})

    let cards
    if (notes){
        cards = notes.map((note, index) => {
            return(
              <Card key={index}>
                <Card.Title>{note.createdAt}</Card.Title>
                <Card.Body>
                    {note.noteContent}
                    <div style={{marginTop: "5px"}}>
                        <Button style={{marginRight: "5px"}} className="mb-3" size="sm" variant="primary" onClick={() => updateDescription(note.noteId, note.noteContent)}>Edit</Button>
                        <Button className="mb-3" size="sm" variant="danger" onClick={() => deleteNote(note.noteId)}>Delete</Button>   
                    </div>
                </Card.Body>
                
            </Card>  
            )
        })
    }

    useEffect(()=>{
        getNotes()
    },[update])

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
        setUpdate(!update)
    }

  //edit description function
  const updateDescription = async (noteId, noteContent) => {
      const response = await fetch(`https://binder-io-api.herokuapp.com/notes/${noteId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     noteContent: description,
        //     updatedAt : date.toUTCString()
        //   })
        });
        const resData = await response.json()
        setDescription(resData.noteContent)
      return (
        <Fragment>
          <button
            type="button"
            class="btn btn-warning"
            data-toggle="modal"
            data-target={`#noteId${resData.noteId}`}
          >
            Edit
          </button>
          <div
            class="modal"
            id={`noteId${noteId}`}
            onClick={() => setDescription(resData.noteContent)}
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Edit Note</h4>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    onClick={() => setDescription(resData.noteContent)}
                  >
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-warning"
                    data-dismiss="modal"
                    onClick={e => updateDescription(e)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => setDescription(resData.noteContent)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
  };
  

    return (
           <Container>
               {cards}
               <CreateNote binderId={props.binderId} getNotes={getNotes} setUpdate={setUpdate} update={update}/>
           </Container> 
            
        
    )
}