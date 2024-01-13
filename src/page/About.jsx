import React from 'react'
import {Counter} from "../components/Counter.jsx";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

function About (){
    const navigate = useNavigate();
    const title = useSelector((state) => state.sectionTopData.title1) //goi lay gia tri da luu trong store reducer
    const yourName = useSelector((state) => state.sectionContactData.yourName);
    const yourEmail = useSelector((state) => state.sectionContactData.yourEmail);
    const yourMessage  = useSelector((state) => state.sectionContactData.yourMessage);

    return(
        <div>
            <Counter/>
            {title}
            <div>Hello About</div>
            <div>Data from SectionContact: Name - {yourName}, Email - {yourEmail}, Message - {yourMessage}</div>
            <button onClick={() => {
                navigate("/");
            }}>Back App</button>
        </div>
    )
}

export default About