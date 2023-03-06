import React from "react";
import {Button } from "@mui/material";
import './FormEndButton.css'

const FormEndButton = () => {
    return (
        <>
        <div className="mainFormBtnContainer">
            <div className="chiledFormBtnContainer">
            <div className="saveBtnContainer">
                <Button variant="text"><span className="saveBtnText">SAVE & NEXT</span></Button>
            </div>
            <div className="saveBtnContainer">
                <Button variant="text"><span className="saveBtnText">CANCEL</span></Button>
            </div>
            </div>
        </div>
        </>
    )
}

export default FormEndButton;