import React from "react";
import { useNavigate } from "react-router-dom";
import { ClientRoutes } from "../../utils/routs";
import './LInputSection.css'
import { Button } from "@mui/material";

const LInputSection = () => {
    const navigate = useNavigate();

    const onSaveBtnClick = () => {
        console.log("nsdjfsdjk>>>>>>>>>>>");
        navigate(ClientRoutes.lastpage);
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
    }

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
                        <Button onClick={onSaveBtnClick} variant="text" ><span className="saveAndExitBtnText">SAVE & EXIT</span></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LInputSection;