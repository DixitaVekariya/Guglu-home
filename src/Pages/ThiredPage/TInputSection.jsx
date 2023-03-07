import React, { useState } from "react";
import './TInputSection.css'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ClientRoutes } from "../../utils/routs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const TInputSection = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        sizeTotal: '',
        sizeFront: '',
        sizeDepth: '',
        accessType: '',
        landscapFeatures: '',
        type: '',
        acress: '',
        lotFeatures: '',
        extraFeatures: '',
        sewerWater: '',
        view: ''
    })
    const [dateValue, setDateValue] = useState(Date.now(''))
    const [fromTimevalue, setFromTimeValue] = useState(Date.now);
    const [toTimevalue, setToTimeValue] = useState(Date.now);

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setState({
            ...state,
            [name]: value
        })
    }

    const OnSaveBtnClick = () => {
        navigate(ClientRoutes.lastpage);
        window.scrollTo({ 
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            <div className="lotTextContainer">
                <h5 className="lotText">LOT DETAILS</h5>
            </div>
            <div className="propertyTextContainer">
                <h5 className="propertyText">PROPERTY LAND</h5>
            </div>
            <div className="inputMainContainer">
                <div className="inputChiledContainer">
                    <div className="aptInputContainer">
                        <p className="aptText">Size Total</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.sizeTotal} name="sizeTotal" onChange={handleChange} id="size-total" fullWidth placeholder="Enter Size Total Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Size Front</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.sizeFront} name="sizeFront" onChange={handleChange} id="size-front" fullWidth placeholder="Enter Size Front Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Size Depth</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.sizeDepth} name="sizeDepth" onChange={handleChange} id="size-depth" fullWidth placeholder="Enter Size Depth Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Access Type</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.accessType} name="accessType" onChange={handleChange} id="access-type" fullWidth placeholder="Enter Access Type Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Landscape features</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.landscapFeatures} name="landscapFeatures" onChange={handleChange} id="landscape-features" fullWidth placeholder="Enter Landscape features Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Type</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.type} name="type" onChange={handleChange} id="outlined-basic" fullWidth placeholder="Enter Type Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Acres</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.acress} name="acress" onChange={handleChange} id="type" fullWidth placeholder="Enter Acres Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Lot Features</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.lotFeatures} name="lotFeatures" onChange={handleChange} id="lot-features" fullWidth placeholder="Enter Lot Features Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                </div>
            </div>
            <div className="propertyTextContainer">
                <h5 className="propertyText">OTHER INFORMATION</h5>
            </div>
            <div className="inputMainContainer">
                <div className="inputChiledContainer">
                    <div className="aptInputContainer">
                        <p className="aptText">Extra Features</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.extraFeatures} name="extraFeatures" onChange={handleChange} id="extra-features" fullWidth placeholder="Enter Extra Features Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Sewer/ Water</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.sewerWater} name="sewerWater" onChange={handleChange} id="sewer-water" fullWidth placeholder="Enter Sewer/ Water Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">View</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.view} name="view" onChange={handleChange} id="view" fullWidth placeholder="Enter View Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                </div>
            </div>
            <div className="propertyTextContainer">
                <h5 className="propertyText">OPEN HOUSE</h5>
            </div>
            <div className="aptInputContainer">
                <p className="aptText">Date *</p>
                <div className="inputAptContainer">
                    <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                        <DatePicker
                            value={dateValue}
                            inputFormat='DD/MM/YYYY'
                            onChange={(newValue) => {
                                setDateValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div style={{ height: '30px' }}></div>
            <div className="aptInputContainer">
                <p className="aptText">Time from *</p>
                <div className="inputAptContainer">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileTimePicker
                            value={fromTimevalue}
                            onChange={(newValue) => {
                                setFromTimeValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div style={{ height: '30px' }}></div>
            <div className="aptInputContainer">
                <p className="aptText">Time to *</p>
                <div className="inputAptContainer">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileTimePicker
                            value={toTimevalue}
                            onChange={(newValue) => {
                                setToTimeValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div style={{ height: '30px' }}></div>
            <div className="inputMainContainer">
                <div className="inputChiledContainer">
                    <div className="aptInputContainer">
                        <p className="aptText">Notes</p>
                        <div className="inputAptContainer">
                            <TextareaAutosize
                                aria-label="empty textarea"
                                minRows={6}
                                placeholder="Enter Description Hear"
                                style={{ display: 'flex', width: '100%', borderRadius: "5px", padding: "20px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '30px' }}></div>
            <div className="inputMainContainer">
                <div className="inputChiledContainer">
                    <div className="aptInputContainer">
                        <p className="aptText">Appointments *</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.appintment} name="appointment" onChange={handleChange} id="appointments" fullWidth placeholder="Enter Appointments Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                </div>
            </div>
            <div className="thiredFormBtnContainer">
                <div className="chiledsThiredFormBtnContainer">
                    <div className="thiredSaveBtnContainer">
                        <Button onClick={OnSaveBtnClick} variant="text" ><span className="thiredSaveBtnText">SAVE & NEXT</span></Button>
                    </div>
                    <div className="thiredSaveBtnContainer">
                        <Button variant="text"><span className="thiredSaveBtnText">CANCEL</span></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TInputSection;