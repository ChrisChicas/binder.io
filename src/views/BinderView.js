//Tabbed Binder Viewing page
import CreateBinderForm from '../components/CreateBinder'
import NoteCards from '../components/NoteCards'
import {React} from 'react'
import {Tab, Tabs} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';

export default function DocumentView(props){
    
    const tabs = props.Binders.map((binder)=>{
        return (
            <Tab 
                eventKey={`/binder/${binder.id}`}
                title={binder.name}
                >
                <NoteCards notes={binder.notes}/>
            </Tab>
        )
    })
    return (
        <div>
            <h2>Binder Viewer</h2>
            <Tabs>
                
                    <Tab eventKey={'#newBinder'} title="Add">
                        <CreateBinderForm/>
                    </Tab>
              
                
                {tabs}
            </Tabs>
        </div>
    )
}