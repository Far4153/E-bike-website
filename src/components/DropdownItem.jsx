import React from "react";

function DropdownItem(props){
    return (
        <li className="dropdownItem">
            <p className="inline">{props.img}</p>
            <a className="inline" href={props.href}  target="_blank"  rel="noopener noreferrer">{props.text}</a>
        </li>
    )
}

export default DropdownItem;