//SideBar component to navigate Binders and notes. Should later include buttons for adding, editing and deleting binders and notes.

//imports
import {React, useEffect, useState} from 'react';
import {Button, ButtonGroup, Offcanvas} from 'react-bootstrap';
import Binders from './Binders';




export default function SideBar(props){
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

   return (
       <div>
           <Button variant="primary" onClick={handleShow}>
               Open Binder Tab
           </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Binders</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ButtonGroup>
                        <Button variant="secondary">New Binder</Button>
                        <Button variant="secondary">Edit Binders</Button>
                        <Button variant="danger">Delete Binders</Button>
                    </ButtonGroup>
                        
                   <Binders/>
                </Offcanvas.Body>
            </Offcanvas>
       </div>
   
   )
}