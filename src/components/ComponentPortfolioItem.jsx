import React from "react";

function ComponentPortfolioItem(props) {
    const { title, content, src } = props
    return (
        <div className="sectionPortfolio__photo">
            <img src={src}/>
            <div className="sectionPortfolio__photo__hover">
                <p className="sectionPortfolio__photo__name">{title}</p>
                <p className="sectionPortfolio__photo__author">Author: {content}</p>
            </div>
        </div>
    )
}

export default ComponentPortfolioItem