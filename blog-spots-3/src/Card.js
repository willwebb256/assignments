import React from "react"

export default function Card(props) {
   
    
    
    return (
        <div className="card">
            {
               
            }
            <img 
                src={`../images/${props.imageUrl}`}
                className="card--image" 
            />
            <div className="card--stats">
                <img src="../images/googleMap.png" className="card--pin" />
                <span>{props.location}</span>
                <span className="gray"><a href="({props.googleMapsUrl})">view on google maps</a></span>
            </div>
            <h1>{props.title}</h1>
            <p className="card--title">{props.startDate} - {props.endDate}</p>
            <p className="card--price">
                <span className="bold">{props.description}</span>
            </p>
        </div>
    )
}   