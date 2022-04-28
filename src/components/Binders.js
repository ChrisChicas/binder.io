// Component to display a user's list of binders

//imports
import React from 'react';
import {ListGroup} from 'react-bootstrap';

export default function Binders(props){
    const data = [
        {   
            name : "Math",
            notes : ["12/01/20", "12/03/20", "12/05/20"]
        },
        {
            name : "Science",
            notes : ["12/02/20", "12/04/20", "12/06/20"]
        },
        {
            name : "History"
        
        }

    ]
    const display = data.map((binder)=>{
        return (
        <ListGroup.Item>{binder.name}</ListGroup.Item>
        )
    })
    return (
       <ListGroup variant="flush">
           {display}
       </ListGroup>
           
    )
    
}