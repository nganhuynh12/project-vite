import React from "react";
import {FaLaptop, FaLink, FaPaperPlane} from "react-icons/fa";
import ComponentWorkItem from "./ComponentWorkItem.jsx";
import {useTranslation} from "react-i18next";

function SectionWork() {
    const { t } = useTranslation();
    const workItems = [
        {
            title: "Responsive Mobile",
            content: "Lavish CSS Template is designed by templatemo. Download, edit and use this layout.",
            icon: <FaLaptop></FaLaptop>
        },

        {
            title: "CSS Templates",
            content: "We provide a wide range of HTML5 templates for free. Please spread a word about us on social media",
            icon: <FaLink></FaLink>
        },

        {
            title: "UI & UX Design",
            content: "redits go to Pixabay and Unsplash for images used in this free CSS website template",
            icon: <FaPaperPlane></FaPaperPlane>
        }
    ]


    return (
        <div className="sectionWork">
            <div className="sectionWork__title">
                <h2>WHAT I DO</h2>
            </div>
            <div className="sectionWork__body">

                {
                    workItems.map((item) => {
                        return (
                            <ComponentWorkItem
                                title={t(item.title)}
                                content={t(item.content)}
                                icon={item.icon}
                            />
                        )
                    })
                }

                </div>
        </div>
    )
}

export default SectionWork