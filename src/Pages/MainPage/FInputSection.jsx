import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { ClientRoutes } from "../../utils/routs";

import './FInputSection.css'
import axiosInstance from '../../utils/axiosInstance';



const InputSection = () => {
    const navigate = useNavigate();
    const defaultErrors = {
        streetErrorMessage: '',
        provinceErrorMessage: '',
        cityErrorMessage: '',
        contryNameErrorMessage: '',
        postalCodeErrorMessage: '',
        frontingErrorMessage: '',
        PropertyErrorMessage: '',
        owenershipErrorMessage: '',
        descriptionErrorMessage: ''
    }
    const [state, setState] = useState({
        unitApt: '',
        streetHouse: '',
        property: '',
        province: '',
        city: '',
        fronting: '',
        owenership: '',
        communityName: '',
        contryName: '',
        postalCode: '',
        pricePer: '',
        taxe: '',
        taxeYear: '',
        assessment: '',
        assessmentYear: '',
        specialDesignation: '',
        description: ''
    })
    const [provinceData, setProvinceData] = useState([])
    const [citydata, setCityData] = useState([])
    const [price, setPrice] = useState(0)
    const [propertyData, setPropertyData] = useState([])
    const [owenershipData, setOwenershipData] = useState([])
    const [error, setError] = useState({
        // streetErrorMessage: '',
        // provinceErrorMessage: '',
        // cityErrorMessage: '',
        // contryNameErrorMessage: '',
        // postalCodeErrorMessage: '',
        // frontingErrorMessage: '',
        // PropertyErrorMessage: '',
        // owenershipErrorMessage: '',
        // descriptionErrorMessage: ''
        ...defaultErrors
    })


    useEffect(() => {
        getProvinceData();
        getCityData();
        getPropertyData();
        getOwenershipData();
    }, [])

    const provinceOptions = provinceData?.map((item) => item.name)

    const getProvinceData = () => {
        axiosInstance.get("api/get-provinces/?per_page=100")
            .then((res) => {
                console.log("resProvince", res);
                if (res.status === 200) {
                    setProvinceData(res.data.data)
                }
            })
            .catch((err) => {
                console.log("err", err);
            })
    }

    const cityOptions = citydata?.map((item) => item.name)

    const getCityData = () => {
        axiosInstance.get("api/get-cities/666/?per_page=100")
            .then((res) => {
                console.log('resCity', res);
                if (res.status === 200) {
                    setCityData(res.data.data)
                }
            })
            .catch((err) => {
                console.log("err", err);
            })
    }

    const propertyOptions = propertyData?.map((item) => item.name)

    const getPropertyData = () => {
        axiosInstance.get("api/property-types/?per_page=100")
            .then((res) => {
                console.log("resProperty", res);
                if (res.status === 200) {
                    setPropertyData(res.data.data)
                }
            })
            .catch((err) => {
                console.log("err", err);
            })
    }

    const owenershipOptions = owenershipData?.map((item) => item.long_value)

    const getOwenershipData = () => {
        axiosInstance.get("api/ownership-types/?per_page=100")
            .then((res) => {
                console.log("resOwnership", res);
                if (res.status === 200) {
                    setOwenershipData(res.data.data)
                }
            })
            .catch((err) => {
                console.log("err", err);
            })
    }

    const Fronting = [
        { label: 'North' },
        { label: 'South' },
        { label: 'East' },
        { label: 'West' }
    ];

    const List = [
        { label: 'Sale By owner' }, { label: 'Listing Brokerage' }
    ]

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setState({
            ...state,
            [name]: value
        })
    }


    const OnSaveBtnClick = () => {
        setError({
            ...defaultErrors
        })

        const errorMessages = {}

        if (!state.streetHouse.trim()) {
            errorMessages.streetErrorMessage = 'Street Name is required!'

        } if (!state.postalCode.trim()) {
            errorMessages.postalCodeErrorMessage = 'Postal Code is required!'

        } if (!state.contryName.trim()) {
            errorMessages.contryNameErrorMessage = 'Contry is required!'

        } if (!state.fronting.trim()) {
            errorMessages.frontingErrorMessage = 'Fronting On is required!'

        } if (!state.property.trim()) {
            errorMessages.PropertyErrorMessage = 'Property  Type is required!'

        } if (!state.owenership.trim()) {
            errorMessages.owenershipErrorMessage = 'Owenership Type is required!'

        } if (!state.city.trim()) {
            errorMessages.cityErrorMessage = 'City is required!'

        } if (!state.province.trim()) {
            errorMessages.provinceErrorMessage = 'Province is required!'

        } if (!state.description.trim()) {
            errorMessages.descriptionErrorMessage = 'Description is required!'

        }
        if (Object.values(errorMessages).length) {
            setError({
                ...defaultErrors, ...errorMessages
            })
            return
        }
        else {
            navigate(ClientRoutes.secondPage);
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }

    }


    return (
        <>
            <div className="subjectTextContainer">
                <h5 className="subjectText">SUBJECT PROPERTY</h5>
            </div>
            <div className="addressTextContainer">
                <h5 className="addressText">ADDRESS</h5>
            </div>
            <div className="inputMainContainer">
                <div className="inputChiledContainer">
                    <div className="aptInputContainer">
                        <p className="aptText">Unit/Apt No.</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.unitApt} name="unitApt" onChange={handleChange} id="unit-apt" fullWidth placeholder="Enter Unit/Apt No. Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Street And House Number *</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.streetHouse} name="streetHouse" onChange={handleChange} id="street-house" fullWidth placeholder="Enter Street Name And House Number  Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Province*</p>
                        <div className="inputAptContainer">
                            <Autocomplete
                                disablePortal
                                id="province"
                                options={provinceOptions}
                                sx={{ width: 750 }}
                                renderInput={(params) => <TextField value={state.province} name="province" onChange={handleChange} {...params} placeholder={'Select Province'} />}
                            />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">City*</p>
                        <div className="inputAptContainer">
                            <Autocomplete
                                disablePortal
                                id="city"
                                options={cityOptions}
                                sx={{ width: 750 }}
                                renderInput={(params) => <TextField value={state.city} name="city" onChange={handleChange} {...params} placeholder={'Select City'} />}
                            />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Community Name</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.communityName} name="communityName" onChange={handleChange} id="community-name" fullWidth placeholder="Enter Community Name Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Contry*</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.contryName} name="contryName" onChange={handleChange} id="contry-name" fullWidth placeholder="Enter Contry Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Postal Code*</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.postalCode} name="postalCode" onChange={handleChange} id="postal-code" fullWidth placeholder="Enter Postal Code Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Fronting On*</p>
                        <div className="inputAptContainer">
                            <Autocomplete
                                disablePortal
                                id="fronting"
                                options={Fronting}
                                sx={{ width: 750 }}
                                renderInput={(params) => <TextField value={state.fronting} name="fronting" onChange={handleChange} {...params} placeholder={'Select Fronting On*'} />}
                            />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                </div>
            </div>
            <div className="addressTextContainer">
                <h5 className="addressText">LISTING INFORMATION</h5>
            </div>
            <div className="inputMainContainer">
                <div className="inputChiledContainer">
                    <div className="aptInputContainer">
                        <p className="aptText">Sale / Rent*</p>
                        <div className="inputAptContainer">
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="forSale"
                                    name="radio-buttons-group"
                                >
                                    <div >
                                        <FormControlLabel value="forSale" control={<Radio style={{ color: '#0F2E1D' }} />} label="for Sale" />
                                        <FormControlLabel value="forRent" control={<Radio style={{ color: '#0F2E1D' }} />} label="For Rent" />
                                    </div>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Listed By*</p>
                        <div className="inputAptContainer">
                            <Autocomplete
                                disablePortal
                                id="list"
                                options={List}
                                sx={{ width: 750 }}
                                renderInput={(params) => <TextField value={state.list} name="list" onChange={handleChange} {...params} placeholder={'Select list Type'} />}
                            />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Price*</p>
                        <div className="inputAptContainer">
                            <button className="addOrLessButton" onClick={() => setPrice(price - 1)}><b className="addOrLessText">-</b></button>
                            <input value={price} onChange={(e) => setPrice(e.target.value)} className="addOrlessInput" />
                            <button className="addOrLessButton" onClick={() => setPrice(price + 1)}><b className="addOrLessText">+</b></button>
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Price Per</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.pricePer} name="pricePer" onChange={handleChange} id="taxe" fullWidth placeholder="Enter Taxes Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Designation*</p>
                        <div className="inputAptContainer">
                            <div style={{border: '1px solid lightgray',borderRadius: '50px', display:'flex'}}>
                                <Button style={{backgroundColor: '#0F2E1D', margin: '5px',borderRadius: '50px'}}>
                                   <span  style={{color: '#ffff'}}>Residential</span> 
                                </Button>
                                <Button style={{ margin: '5px',borderRadius: '50px'}}>
                                    <span style={{color: '#0F2E1D'}}>Commercial</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Property Type *</p>
                        <div className="inputAptContainer">
                            <Autocomplete
                                disablePortal
                                id="property"
                                options={propertyOptions}
                                sx={{ width: 750 }}
                                renderInput={(params) => <TextField value={state.property} name="property" onChange={handleChange} {...params} placeholder={'Select Property Type'} />}
                            />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Ownership Type *</p>
                        <div className="inputAptContainer">
                            <Autocomplete
                                disablePortal
                                id="owenership"
                                options={owenershipOptions}
                                sx={{ width: 750 }}
                                renderInput={(params) => <TextField value={state.owenership} name="owenership" onChange={handleChange} {...params} placeholder={'Select Ownership Type'} />}
                            />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Taxes</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.taxe} name="taxe" onChange={handleChange} id="taxe" fullWidth placeholder="Enter Taxes Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Tax Year</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.taxeYear} name="taxeYear" onChange={handleChange} id="taxe-year" fullWidth placeholder="Enter Tax Year Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Assessment</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.assessment} name="assessment" onChange={handleChange} id="assessment" fullWidth placeholder="Enter Assessment Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Assessment Year</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.assessmentYear} name="assessmentYear" onChange={handleChange} id="assessment-year" fullWidth placeholder="Enter Assessment Year Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Special Designation</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.specialDesignation} name="specialDesignation" onChange={handleChange} id="special-designation" fullWidth placeholder="Enter Special Designation Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                    <div className="aptInputContainer">
                        <p className="aptText">Pool Type</p>
                        <div className="inputAptContainer">
                            <TextField className="aptInput" value={state.poolType} name="poolType" onChange={handleChange} id="pool-type" fullWidth placeholder="Enter Pool Type Hear" variant="outlined" />
                        </div>
                    </div>
                    <div style={{ height: '30px' }}></div>
                </div>
            </div>
            <div className="addressTextContainer">
                <h5 className="addressText">DESCRIPTION *</h5>
            </div>
            <div className="textAreaContainer">
                <TextareaAutosize
                    aria-label="empty textarea"
                    minRows={6}
                    placeholder="Enter Description Hear"
                    className="textArea"
                    name="description"
                    value={state.description} onChange={handleChange}
                />
            </div>
            {error.streetErrorMessage &&
                <div className="errorContainer">
                    <ErrorOutlineIcon style={{ color: '#f44336', marginRight: '10px' }} />
                    {error.streetErrorMessage}
                </div>
            }
            {error.postalCodeErrorMessage &&
                <div className="errorContainer">
                    <ErrorOutlineIcon style={{ color: '#f44336', marginRight: '10px' }} />
                    {error.postalCodeErrorMessage}
                </div>
            }
            {error.contryNameErrorMessage &&
                <div className="errorContainer">
                    <ErrorOutlineIcon style={{ color: '#f44336', marginRight: '10px' }} />
                    {error.contryNameErrorMessage}
                </div>
            }
            {error.frontingErrorMessage &&
                <div className="errorContainer">
                    <ErrorOutlineIcon style={{ color: '#f44336', marginRight: '10px' }} />
                    {error.frontingErrorMessage}
                </div>
            }
            {error.PropertyErrorMessage &&
                <div className="errorContainer">
                    <ErrorOutlineIcon style={{ color: '#f44336', marginRight: '10px' }} />
                    {error.PropertyErrorMessage}
                </div>
            }
            {error.owenershipErrorMessage &&
                <div className="errorContainer">
                    <ErrorOutlineIcon style={{ color: '#f44336', marginRight: '10px' }} />
                    {error.owenershipErrorMessage}
                </div>
            }
            {error.cityErrorMessage &&
                <div className="errorContainer">
                    <ErrorOutlineIcon style={{ color: '#f44336', marginRight: '10px' }} />
                    {error.cityErrorMessage}
                </div>
            }
            {error.provinceErrorMessage &&
                <div className="errorContainer">
                    <ErrorOutlineIcon style={{ color: '#f44336', marginRight: '10px' }} />
                    {error.provinceErrorMessage}
                </div>
            }
            {error.descriptionErrorMessage &&
                <div className="errorContainer">
                    <ErrorOutlineIcon style={{ color: '#f44336', marginRight: '10px' }} />
                    {error.descriptionErrorMessage}
                </div>
            }
            <div className="mainFormBtnContainer">
                <div className="chiledFormBtnContainer">
                    <div className="saveBtnContainer">
                        <Button variant="text" onClick={OnSaveBtnClick}><span className="saveBtnText">SAVE & NEXT</span></Button>
                    </div>
                    <div className="saveBtnContainer">
                        <Button variant="text"><span className="saveBtnText">CANCEL</span></Button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default InputSection;