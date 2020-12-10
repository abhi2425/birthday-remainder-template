import React from "react";
import "./Person.css"
const persons = (props) => (
    <div className="person" onClick={props.clicked} >
        <div className="personImage">
            <image src={props.image} alt={props.name} />
        </div>
        <div className="personDetails">
            <div className="name">{props.name}</div>
            <div className="age">{props.age}</div>
        </div>
    </div>
);

export default persons;
