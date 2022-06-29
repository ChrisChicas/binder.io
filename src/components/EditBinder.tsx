import React, { Fragment, useState } from "react";
import {Modal, Form, Button} from 'react-bootstrap'

const EditBinder = (props: { binder: { binderTitle: any; binderId: any; }; setUpdate: (arg0: boolean) => void; update: any; }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => {setShow(false)}
  const handleShow = () => {setShow(true)}
  const [newBinderTitle, setBinderTitle] = useState(props.binder.binderTitle)

  const requirementCheck = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
        
        if(newBinderTitle !== ""){
            await fetch(`https://binder-io-api.herokuapp.com/userbinders/${props.binder.binderId}`,{
                    method : 'PUT',
                    headers : {"Content-Type":"application/json"},
                    body : JSON.stringify({binderTitle : newBinderTitle})
            })
        }
       props.setUpdate(!props.update)
  }
  return (

    <Fragment>
      <Button style={{marginRight: "5px"}} className="mb-3" size="sm" variant="primary" onClick={handleShow}>Edit Binder</Button>
      <Modal
        show={show}
        onHide={handleClose}>
    <Modal.Header closeButton>
  <Modal.Title>Edit Binder Name</Modal.Title>
  </Modal.Header>
                        <Form onSubmit={(e)=>{
                          requirementCheck(e)
                          handleClose()
                        }}>
                            <Form.Group>
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder={props.binder.binderTitle} value={newBinderTitle} onChange={e => {setBinderTitle(e.target.value)}}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                </Form>

                </Modal>
                </Fragment>
  )
    
  
  
};
export default EditBinder;
