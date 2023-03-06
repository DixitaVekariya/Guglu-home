import React from "react";
import './LInputSection.css'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

const LInputSection = () => {
    return (
        <>
            <div className="formateListTextContainer">
                <h5 className="formateListText">UPLOAD LISTING MEDIA</h5>
            </div>
            <div role="button" className="acceptedContainer">
                <input accept="image/* , video/*" type="file" />
            </div>
            <div className="saveAndExitMainBtnContainer">
                <div className="chiledSaveAndExitBtnContainer">
                    <div className="saveAndExitBtnContainer">
                        <Button variant="text" ><span className="saveAndExitBtnText">SAVE & EXIT</span></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LInputSection;