import React from "react";

function ComponentWorkItem(props) {
    const { title, content, icon } = props

    return (
        <div className="sectionWork__cover">
            <div className="sectionWork__icon">{icon}</div>
            <div className="sectionWork__text">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}
export default ComponentWorkItem