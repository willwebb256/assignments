import React from "react"
import GoogleMapsIcon from "./assets/images/googleMap.png"

export default function Card(props) {
   
    
    
    return (
        <div className="card">
            {
               
            }
            {/* <img 
                src={require(`${props.imageUrl}`)}
                className="card--image" 
            /> */}
            <div className="card--stats">
                <img src={GoogleMapsIcon} className="card--pin" />
                <span>{props.location}</span>
                <span className="gray"><a href="({props.googleMapsUrl})">view on google maps</a></span>
            </div>
            <h1>{props.title}</h1>
            <p className="card--title">{props.author} - {props.date}</p>
            <p className="card--price">
                <span className="bold">{props.subTitle}</span>
            </p>
        </div>
    )
}   