import React from "react";
import './SInputBar.css'
import SInputSection from "./SInputSection";

const SInputBar = () => {
    return (
        <>
            <div className="mainContainer">
                <div className="chiledMainContainer">
                    <div className="allEventsContainer">
                        <div className="addTextContainer">
                            <h5 className="addText">Add Listing</h5>
                        </div>
                        <a href="" style={{ textDecoration: 'none' }}>
                            <div className="multiBtnContainer">
                                <div className="otherStepContainer">
                                    <a href="" className="otherStepText" >1</a>
                                </div>
                                <div className="firstStepContainer">
                                    <a href="" className="firstStepText">2</a>
                                </div>
                                <div className="otherStepContainer">
                                    <a href="" className="otherStepText">3</a>
                                </div>
                                <div className="otherStepContainer">
                                    <a href="" className="otherStepText">4</a>
                                </div>
                                <div className="otherStepContainer">
                                    <a href="" className="otherStepText">5</a>
                                </div>
                            </div>
                        </a>
                        <SInputSection/>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default SInputBar;