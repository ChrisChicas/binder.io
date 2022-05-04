import {React, useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'

export default function BinderDeleteButton(props){
    const onClick = async ()=>{
        await fetch(`https://binder-io-api.herokuapp.com/userbinders/${props.binderId}`,{
            method: "DELETE"
        })
        .catch(err => console.log(err))
    }
    return (
        <Button variant="danger" onClick={onClick}>
            Delete Binder
        </Button>
    )
}