import React from "react"
/* creates Links component that pulls links from About which pulls links from App which pulls links from User */
function Links(props) {
    return (
        <div>
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
        </div>
    );
};

export default Links;