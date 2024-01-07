import React from "react";

function ComponentAboutItem(props) {
    const { title, content, value } = props

    return (
        <div className="sectionAbout__cover">
            <div className="sectionAbout__text">
                <span>{title}</span>
                <span>{content}</span>
            </div>
            <input className="sectionAbout__col" type="range" min="0" max="100" value={value}/>
        </div>
    )
}

export default ComponentAboutItem