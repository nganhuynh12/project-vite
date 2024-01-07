import React from 'react'

function SectionLink() {
    function scrollView (name) {
        const section = document.getElementsByClassName(`${name}`)
        section[0].scrollIntoView({behavior : "smooth", block: "end"})
    }

    return (
        <div className="sectionLink">
            <div className="sectionLink__link1 link1" onClick={
                () => {
                    scrollView("sectionTop")
                }
            }></div>
            <div className="sectionLink__link1 link2" onClick={
                () => {
                    scrollView("sectionWork")
                }
            }></div>
            <div className="sectionLink__link1 link3" onClick={
                () => {
                    scrollView("sectionAbout")
                }
            }></div>
            <div className="sectionLink__link1 link4" onClick={
                () => {
                    scrollView("sectionPortfolio")
                }
            }></div>
            <div className="sectionLink__link1 link5" onClick={
                () => {
                    scrollView("sectionContact")
                }
            }></div>
        </div>
    )
}

export default SectionLink