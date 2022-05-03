import { Alert } from "react-bootstrap";

export default function Home(props){
    return(
        <div>       
            {props.loggedOut ? <Alert variant="info" onClose={() => props.setLoggedOut(false)} dismissible>Successfully logged out.</Alert> : null}
            <h2>Home</h2>
        </div>
    )
}