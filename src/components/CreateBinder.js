// Component for creating a new binder screen

//imports
import {React, useState} from 'react'
import {Form, Button} from 'react-bootstrap'

export default async function CreateBinder(){
    //binderName state
    let [newBinderName, setBinderName] = useState('')
    //requirement check
    async function requirementCheck(e){
        e.preventDefault()
        //if newBinderName is not empty, run a fetch request, method POST, body including bindername and userId
        if(newBinderName != ""){
            await fetch(`https://binder-io-api.herokuapp.com/userBinders/`,{
                    method : 'POST',
                    body : JSON.stringify({binderName : newBinderName,userId : props.userId})
            })
        }
    }
    
    return(
        <div>
            <Form onSubmit={requirementCheck}>
                <Form.Group>
                    <Form.Label>Binder Name</Form.Label>
                    <Form.Control type="text" placeholder="enter a name for your binder!" value={newBinderName} onChange={e => {setBinderName(e.target.value)}}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    )
}