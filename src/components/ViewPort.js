import React from "react";

export default function ViewPort(props){
    if(props.noteContent == null) {
        return (
            <div>
                <p>Get started with a Binder!</p>
            </div>
        )
    }
}