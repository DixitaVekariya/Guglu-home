import React from "react";
import './TInputBar.css'
import TInputSection from "./TInputSection";

const TInputBar = () => {
    return (
        <>
            <div className="mainContainer">
                <div className="chiledMainContainer">
                    <div className="allEventsContainer">
                        <div className="addTextContainer">
                            <h5 className="addText">Add Listing</h5>
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <div className="multiBtnContainer">
                                <div className="otherStepContainer">
                                    <a href="" className="otherStepText" >1</a>
                                </div>
                                <div className="otherStepContainer">
                                    <a href="" className="otherStepText">2</a>
                                </div>
                                <div className="firstStepContainer">
                                    <a href="" className="firstStepText">3</a>
                                </div>
                                <div className="otherStepContainer">
                                    <a href="" className="otherStepText">4</a>
                                </div>
                                <div className="otherStepContainer">
                                    <a href="" className="otherStepText">5</a>
                                </div>
                            </div>
                        </div>
                        <TInputSection />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TInputBar;