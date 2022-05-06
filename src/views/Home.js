import { Alert } from "react-bootstrap";
import BinderImg from "../freebinder.png"

export default function Home(props){
    return(
        <div className="center">       
            {props.loggedOut ? <Alert variant="info" onClose={() => props.setLoggedOut(false)} dismissible>Successfully logged out.</Alert> : null}
            <h1 >Welcome to Binder.io!</h1>
            <img src={BinderImg} alt="free img of binder from https://creazilla.com/nodes/1631862-binder-clipart" style={{width: "25vw", marginBottom: "5px"}}/>
            <h3>A free note taking app! Log in or Sign up to begin!</h3>
        </div>
        
    )
}