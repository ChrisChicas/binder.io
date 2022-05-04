//Tabbed Binder Viewing page
import CreateBinderForm from '../components/CreateBinder'
import NoteCards from '../components/NoteCards'
import {React} from 'react'
import {Tab, Tabs, Container} from 'react-bootstrap'

export default async function DocumentView(props){
    
    let response = await fetch(`https://binders-io-api.herokuapp.com/userbinders/user/${props.userId}`)
    let binders = await response.json()
    let tabs;
    if(binders != null){
        tabs = binders.map((binder)=>{
            return (
                <Tab 
                    eventKey={`/binder/${binder.BinderId}`}
                    title={binder.binderTitle}
                    >
                    <NoteCards binderId={binder.binderId}/>
                </Tab>
            )
        })
    }
    
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