import {React, UseEffect, UseState} from 'react'
import {Button, Offcanvas} from 'react-bootstrap'



export default function SideBar(props){
    const [visible, setVisible] = UseState();
    const handleClose = () => setVisible(false)
    const handleShow = () => setVisible(true)

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Open Binder Explorer
            </Button>

            <Offcanvas show={visible} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Explorer</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Binder list goes here. Binder list would be a list of the binders, tabbed to include list of notes within each binder. pending.
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}