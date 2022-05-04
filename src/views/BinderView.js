//Tabbed Binder Viewing page
import CreateBinderForm from '../components/CreateBinder'
import NoteCards from '../components/NoteCards'
import BinderDeleteButton from '../components/BinderDelete'
import {React, useState, useEffect} from 'react'
import {Tab, Tabs, Container} from 'react-bootstrap'

export default function DocumentView(props){
    //state variable for the binders array
    const [binders, setBinders] = useState([])
    //variable to store and populate the tabs for the page. Each tab should include the title of the binder, and it should pass the binderId to the NoteCards and delete button components.
    const tabs = binders.map((binder)=>{
        return (
            <Tab key={binder.binderId} title={binder.binderTitle} eventKey={`binder${binder.binderId}`}>
                <NoteCards binderId={binder.binderId}/>
                <BinderDeleteButton binderId={binder.binderId}/>
            </Tab>
        )
    })
    //useEffect, run getBinders function
    useEffect(()=>{
        const fetchData = async ()=>{
            let response = await fetch(`https://binder-io-api.herokuapp.com/userbinders/user/${props.userId}`)
            let data = await response.json()
            setBinders(data)
        }
       fetchData()
    }, [])
    
    return (
        <div>
            <Container>
                <h2>Binder Viewer</h2>
                <Tabs>
                        <Tab eventKey={'#newBinder'} title="Add">
                            <CreateBinderForm userId={props.userId}/>
                        </Tab>
                        {tabs}
                </Tabs>
            </Container>
            
        </div>
    )
    }
    
