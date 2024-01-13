import React, {useEffect, useState} from 'react'

import './App.css'
import SectionTop from "./components/SectionTop";
import SectionWork from "./components/SectionWork";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import SectionPortfolio from "./components/SectionPortfolio";
import SectionFooter from "./components/SectionFooter";
import SectionLink from "./components/sectionLink";
import handleSectionScroll from "./helpers/handleSectionScroll";
import changeText from "./helpers/changeText.jsx";
import {Counter} from "./components/Counter.jsx";



function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

  useEffect(() => {
    setInterval(changeText,2000)
    const activeSectionTop = document.getElementsByClassName('link1')
    activeSectionTop[0].classList.add('active')
    document.addEventListener("scroll", () => {
        handleSectionScroll("sectionTop", "link1");
        handleSectionScroll("sectionWork", "link2");
        handleSectionScroll("sectionAbout", "link3");
        handleSectionScroll("sectionPortfolio", "link4");
        handleSectionScroll("sectionContact", "link5");
    });

  }, [])

  return (
      <div>
          <Counter />
        <SectionTop name={name} email={email} message={message}/>
        <SectionWork />
        <SectionAbout />
        <SectionPortfolio />
        <SectionContact name={name} setName={setName} email={email} setEmail={setEmail} message={message} setMessage={setMessage} />
        <SectionFooter />
        <SectionLink />
      </div>
  )
}
export default App
