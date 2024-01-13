import React, {useRef} from 'react'
import ComponentPortfolioItem from "./ComponentPortfolioItem";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import _ from 'lodash';

const portfolioItem = [
    {
        src: "/image3.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
       src: "/image4.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image1.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image4.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image3.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image4.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image1.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image4.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image3.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image4.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image1.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image4.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image3.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image4.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image1.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image4.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image3.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image4.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image1.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image4.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image3.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image4.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image1.jpeg",
        title: "Web Design",
        content: "Cindy"
    },

    {
        src: "/image4.jpeg",
        title: "Web Design",
        content: "Cindy"
    }
]

function SectionPortfolio() {
    const { t} = useTranslation();
    const itemPage = 8
    const [displayItem, setDisplayItem] = useState(itemPage)
   function displayLoadMore() {
        setDisplayItem((prevState) => prevState + itemPage)
   }
    function displayLoadLess() {
        setDisplayItem((prevState) => prevState - itemPage)
    }

    return (
        <div className="sectionPortfolio">
            <div className="sectionPortfolio__title">
                <h2>{t("PORTFOLIO")}</h2>
            </div>
            <div className="sectionPortfolio__gallery">
                {
                    portfolioItem.slice(0, displayItem).map((item) => (
                        <ComponentPortfolioItem
                            src={item.src}
                            content={t(item.content)}
                            title={t(item.title)}
                        />
                    ))
                }
            </div>
            {
                portfolioItem.length > displayItem &&
                <button className="sectionPortfolio__loadMore" onClick={displayLoadMore}>
                    {t('Load More')}
                </button>
            }
            {
                displayItem >= itemPage &&
                <button className="sectionPortfolio__loadLess" onClick={displayLoadLess}>
                    {t('Load Less')}
                </button>
            }

        </div>

    )
}


export default SectionPortfolio