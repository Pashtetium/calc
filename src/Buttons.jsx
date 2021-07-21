import React from 'react'

export default function Buttons(props) {
    return (
        <button 
            className={props.className}
            onClick={props.onClick}
            value={props.value}
            key={props.value}
        >
            {props.value}
        </button>
                
            
    )    
}  