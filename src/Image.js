import React from "react";

function Image(props) {
    return (
        <img src={props.source} alt={props.altText} />
    );
}

export default Image;