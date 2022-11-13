import React from "react"


export default function Card(props) {
   
    
    
    return (
        <div className="card">
            <h1>{props.name}</h1>
            <p className="card--title">${props.age}</p>
            <p className="card--price">
                <span className="bold">{props.pets}</span>
            </p>
        </div>
    )
}   