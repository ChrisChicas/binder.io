//Tabbed Binder Viewing page
import CreateBinderForm from '../components/CreateBinder'
import NoteCards from '../components/NoteCards'
import {React, useEffect} from 'react'
import {Tab, Tabs, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';

export default async function DocumentView(props){
    let binders = await fetch(`https://binders-io-api.herokuapp.com/userbinders/${props.userId}`,{
        method : 'GET'
    })
    
    const tabs = binders.map((binder)=>{
        return (
            <Tab 
                eventKey={`/binder/${binder.BinderId}`}
                title={binder.BinderTitle}
                >
                <NoteCards notes={binder.notes}/>
            </Tab>
        )
    })
    return (
        <div>
            <Container>
                <h2>Binder Viewer</h2>
                <Tabs>
                    
                        <Tab eventKey={'#newBinder'} title="Add">
                            <CreateBinderForm/>
                        </Tab>
                
                    
                    {tabs}
                </Tabs>
            </Container>
            
        </div>
    )
}