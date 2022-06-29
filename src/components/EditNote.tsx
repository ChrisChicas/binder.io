import React, { Fragment, useState } from "react";
import {Modal, Form, Button} from 'react-bootstrap'
const EditNote = (props: { note: { noteContent: string | undefined; noteId: any; createdAt: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; setUpdate: (arg0: boolean) => void; update: any; }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => {setShow(false)}
  const handleShow = () => {setShow(true)}
  const [newNoteData, setNewNoteData] = useState(props.note.noteContent)

  const requirementCheck = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
        
        if(newNoteData !== ""){
            let date = new Date()
            await fetch(`https://binder-io-api.herokuapp.com/notes/${props.note.noteId}`,{
                    method : 'PUT',
                    headers : {"Content-Type":"application/json"},
                    body : JSON.stringify({noteContent : newNoteData, updatedAt : date.toUTCString()})
            })
        }
       props.setUpdate(!props.update)
  }
  return (

    <Fragment>
      <Button style={{marginRight: "5px"}} className="mb-3" size="sm" variant="primary" onClick={handleShow}>Edit</Button>
      <Modal
        show={show}
        onHide={handleClose}>
    <Modal.Header closeButton>
  <Modal.Title>{props.note.createdAt}</Modal.Title>
  </Modal.Header>
                        <Form onSubmit={(e)=>{
                          requirementCheck(e)
                          handleClose()
                        }}>
                            <Form.Group>
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder={props.note.noteContent} value={newNoteData} onChange={e => {setNewNoteData(e.target.value)}}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                </Form>

                </Modal>
                </Fragment>
  )
    
  
  
};
export default EditNote;
