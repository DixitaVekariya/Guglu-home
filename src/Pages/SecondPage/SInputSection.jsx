import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useNavigate } from "react-router-dom";
import { ClientRoutes } from "../../utils/routs";
import DeleteIcon from "@mui/icons-material/Delete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import "./SInputSection.css";
import axiosInstance from "../../utils/axiosInstance";

const SInputSection = () => {
  const navigate = useNavigate();
  const defaultErrors = {
    buildingErrorMessage: "",
    ExteriorErrorMessage: "",
  };
  const [state, setState] = useState({
    building: "",
    buildingStyle: "",
    exteriorFinish: "",
    size: "",
    basementDevelopment: "",
    basementType: "",
    basementFeatures: "",
    cooling: "",
    heating: "",
    heatingFuel: "",
    fireplacePresent: "",
    fireplaceType: "",
    fireplaceFuel: "",
    fixtures: "",
    managementCompany: "",
    managementUnit: "",
    roomName: "",
    roomLevel: "",
    roomLength: "",
    roomWidth: "",
    parkingType: "",
  });
  const [dateValue, setDateValue] = useState(Date.now);
  const [stories, setStories] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [aboveGround, setAboveGround] = useState(0);
  const [beloveGround, setBeloveGround] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [fireplace, setFireplace] = useState(0);
  const [managementFee, setManagementFee] = useState(0);
  const [parking, setParking] = useState(0);
  const [buildingData, setBuildingData] = useState([]);
  const [error, setError] = useState({
    // buildingErrorMessage: '',
    // ExteriorErrorMessage: ''
    ...defaultErrors,
  });

  useEffect(() => {
    getBuildingData();
  }, []);

  const buildingOptions = buildingData?.map((item) => item.name);

  const getBuildingData = () => {
    axiosInstance
      .get("api/property-building-types/?per_page=100")
      .then((res) => {
        console.log("resProvince", res);
        if (res.status === 200) {
          setBuildingData(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  const OnSaveBtnClick = () => {
    // console.log("sbjknjm");
    setError({
      ...defaultErrors,
    });

    const errorMessages = {};

    if (!state.building.trim()) {
      errorMessages.buildingErrorMessage = "Building Type is Required!";
    }
    if (!state.exteriorFinish.trim()) {
      errorMessages.ExteriorErrorMessage = "Exterior Finish is Required!";
    }
    if (Object.values(errorMessages).length) {
      setError({
        ...defaultErrors,
        ...errorMessages,
      });
      return;
    } else {
      navigate(ClientRoutes.thiredPage);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="buldingTextContainer">
        <h5 className="buldingText">BUILDING DETAILS</h5>
      </div>
      <div className="inputMainContainer">
        <div className="inputChiledContainer">
          <div className="aptInputContainer">
            <p className="aptText">Building Type *</p>
            <div className="inputAptContainer">
              <Autocomplete
                disablePortal
                id="building-type"
                options={buildingOptions}
                sx={{ width: 750 }}
                renderInput={(params) => (
                  <TextField
                    value={state.building}
                    name="building"
                    onChange={handleChange}
                    {...params}
                    placeholder={"Select Building Type *"}
                  />
                )}
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Building Style</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.buildingStyle}
                name="buildingStyle"
                onChange={handleChange}
                id="building-style"
                fullWidth
                placeholder="Enter Building Style Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Exterior Finish *</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.exteriorFinish}
                name="exteriorFinish"
                onChange={handleChange}
                id="exterior-finish"
                fullWidth
                placeholder="Enter Exterior Finish Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Size</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.size}
                name="size"
                onChange={handleChange}
                id="size"
                fullWidth
                placeholder="Enter Size Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Construction Date</p>
            <div className="inputAptContainer">
              <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                <DatePicker
                  value={dateValue}
                  inputFormat="DD/MM/YYYY"
                  onChange={(newValue) => {
                    setDateValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ width: "100%" }} />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Total stories</p>
            <div className="inputAptContainer">
              <button
                className="addOrLessButton"
                onClick={() => setStories(stories - 1)}
              >
                <b className="addOrLessText">-</b>
              </button>
              <input
                value={stories}
                name="stories"
                onChange={handleChange}
                className="addOrlessInput"
              />
              <button
                className="addOrLessButton"
                onClick={() => setStories(stories + 1)}
              >
                <b className="addOrLessText">+</b>
              </button>
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Total Bedrooms</p>
            <div className="inputAptContainer">
              <button
                className="addOrLessButton"
                onClick={() => setBedrooms(bedrooms - 1)}
              >
                <b className="addOrLessText">-</b>
              </button>
              <input
                value={bedrooms}
                name="bedrooms"
                onChange={handleChange}
                className="addOrlessInput"
              />
              <button
                className="addOrLessButton"
                onClick={() => setBedrooms(bedrooms + 1)}
              >
                <b className="addOrLessText">+</b>
              </button>
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Beds above ground</p>
            <div className="inputAptContainer">
              <button
                className="addOrLessButton"
                onClick={() => setAboveGround(aboveGround - 1)}
              >
                <b className="addOrLessText">-</b>
              </button>
              <input
                value={aboveGround}
                name="aboveGround"
                onChange={handleChange}
                className="addOrlessInput"
              />
              <button
                className="addOrLessButton"
                onClick={() => setAboveGround(aboveGround + 1)}
              >
                <b className="addOrLessText">+</b>
              </button>
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Beds below ground</p>
            <div className="inputAptContainer">
              <button
                className="addOrLessButton"
                onClick={() => setBeloveGround(beloveGround - 1)}
              >
                <b className="addOrLessText">-</b>
              </button>
              <input
                value={beloveGround}
                name="beloveGround"
                onChange={handleChange}
                className="addOrlessInput"
              />
              <button
                className="addOrLessButton"
                onClick={() => setBeloveGround(beloveGround + 1)}
              >
                <b className="addOrLessText">+</b>
              </button>
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Total Bathroom</p>
            <div className="inputAptContainer">
              <button
                className="addOrLessButton"
                onClick={() => setBathroom(bathroom - 1)}
              >
                <b className="addOrLessText">-</b>
              </button>
              <input
                value={bathroom}
                name="bathroom"
                onChange={handleChange}
                className="addOrlessInput"
              />
              <button
                className="addOrLessButton"
                onClick={() => setBathroom(bathroom + 1)}
              >
                <b className="addOrLessText">+</b>
              </button>
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Basement development</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.basementDevelopment}
                name="basementDevelopment"
                onChange={handleChange}
                id="basement-development"
                fullWidth
                placeholder="Enter Basement development Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Basement type</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.basementType}
                name="basementType"
                onChange={handleChange}
                id="basement-type"
                fullWidth
                placeholder="Enter Basement type Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Basement Features</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.basementFeatures}
                name="basementFeatures"
                onChange={handleChange}
                id="basement-features"
                fullWidth
                placeholder="Enter Basement Features Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Cooling</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.cooling}
                name="cooling"
                onChange={handleChange}
                id="cooling"
                fullWidth
                placeholder="Enter Cooling Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Heating</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.heating}
                name="heating"
                onChange={handleChange}
                id="heating"
                fullWidth
                placeholder="Enter Heating Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Heating Fuel</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.heatingFuel}
                name="heatingFuel"
                onChange={handleChange}
                id="heating-fuel"
                fullWidth
                placeholder="Enter Heating Fuel Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Fireplace Present</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.fireplacePresent}
                name="fireplacePresent"
                onChange={handleChange}
                id="fireplace-Present"
                fullWidth
                placeholder="Enter Fireplace Present Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Fireplace Type</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.fireplaceType}
                name="fireplaceType"
                onChange={handleChange}
                id="fireplace-type"
                fullWidth
                placeholder="Enter Fireplace Type Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Fireplace Fuel</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.fireplaceFuel}
                name="fireplaceFuel"
                onChange={handleChange}
                id="fireplace-fuel"
                fullWidth
                placeholder="Enter Fireplace Fuel Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Total Fireplace</p>
            <div className="inputAptContainer">
              <button
                className="addOrLessButton"
                onClick={() => setFireplace(fireplace - 1)}
              >
                <b className="addOrLessText">-</b>
              </button>
              <input
                value={fireplace}
                name="fireplace"
                onChange={handleChange}
                className="addOrlessInput"
              />
              <button
                className="addOrLessButton"
                onClick={() => setFireplace(fireplace + 1)}
              >
                <b className="addOrLessText">+</b>
              </button>
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Extras</p>
            <div className="inputAptContainer">
              <TextareaAutosize
                aria-label="empty textarea"
                minRows={7}
                placeholder="Enter Extras Hear"
                style={{
                  display: "flex",
                  width: "100%",
                  borderRadius: "5px",
                  padding: "20px",
                }}
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Fixtures</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.fixtures}
                name="fixtures"
                onChange={handleChange}
                id="fixtures"
                fullWidth
                placeholder="Enter Fixtures Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Management Company</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.managementCompany}
                name="managementCompany"
                onChange={handleChange}
                id="management-company"
                fullWidth
                placeholder="Enter Management Company Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Management Fee</p>
            <div className="inputAptContainer">
              <button
                className="addOrLessButton"
                onClick={() => setManagementFee(managementFee - 1)}
              >
                <b className="addOrLessText">-</b>
              </button>
              <input
                value={managementFee}
                name="managementFee"
                onChange={handleChange}
                className="addOrlessInput"
              />
              <button
                className="addOrLessButton"
                onClick={() => setManagementFee(managementFee + 1)}
              >
                <b className="addOrLessText">+</b>
              </button>
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Management Fee unit</p>
            <div className="inputAptContainer">
              <TextField
                className="aptInput"
                value={state.managementUnit}
                name="managementUnit"
                onChange={handleChange}
                id="management-fee"
                fullWidth
                placeholder="Enter Management Fee unit Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
          <div className="aptInputContainer">
            <p className="aptText">Feature Image</p>
            <div className="inputAptContainer">
              <TextField
                type="file"
                className="aptInput"
                id="feature-images"
                fullWidth
                placeholder="Enter Feature Image Hear"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ height: "30px" }}></div>
        </div>
      </div>
      <div className="roomMainContainer">
        <h5 className="roomMainText">ROOMS</h5>
        <div className="roomMultiInputContainer">
          <div className="roomChiledContainer">
            <p className="roomMultiLabelText">Room Name</p>
            <div className="roomMultiImputContainer">
              <TextField
                className="roomMultiInput"
                value={state.roomName}
                name="roomName"
                onChange={handleChange}
                id="room-name"
                fullWidth
                placeholder="Room Name (min 2 letters)"
                variant="outlined"
              />
            </div>
          </div>
          <div className="roomChiledContainer">
            <p className="roomMultiLabelText">Level</p>
            <div className="roomMultiImputContainer">
              <TextField
                className="roomMultiInput"
                value={state.roomLevel}
                name="roomLevel"
                onChange={handleChange}
                id="room-level"
                fullWidth
                placeholder="Room Level"
                variant="outlined"
              />
            </div>
          </div>
          <div className="roomChiledContainer">
            <p className="roomMultiLabelText">Length</p>
            <div className="roomMultiImputContainer">
              <TextField
                className="roomMultiInput"
                value={state.roomLength}
                name="roomLength"
                onChange={handleChange}
                id="room-length"
                fullWidth
                placeholder="Room Length"
                variant="outlined"
              />
            </div>
          </div>
          <div className="roomChiledContainer">
            <p className="roomMultiLabelText">Width</p>
            <div className="roomMultiImputContainer">
              <TextField
                className="roomMultiInput"
                value={state.roomWidth}
                name="roomWidth"
                onChange={handleChange}
                id="room-width"
                fullWidth
                placeholder="Room Width"
                variant="outlined"
              />
            </div>
          </div>
          <div className="roomButtonChiledContainer">
            <Button>
              <DeleteIcon sx={{ color: "#0F2E1D", width: 25, height: 25 }} />
            </Button>
          </div>
        </div>
        <div className="addMoreBtnContainer">
          <div className="chiledAddMoreBtnContainer">
            <div className="addBtnContainer">
              <Button variant="text">
                <span className="addBtnText">ADD MORE</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="inputMainContainer">
          <div className="inputChiledContainer">
            <div className="parkingContainer">
              <h5 className="parkingText">PARKING</h5>
            </div>
            <div className="aptInputContainer">
              <p className="aptText">Parking Type</p>
              <div className="inputAptContainer">
                <TextField
                  className="aptInput"
                  value={state.parkingType}
                  name="parkingType"
                  onChange={handleChange}
                  id="parking-type"
                  fullWidth
                  placeholder="Enter Parking Type Hear"
                  variant="outlined"
                />
              </div>
            </div>
            <div style={{ height: "30px" }}></div>
            <div className="aptInputContainer">
              <p className="aptText">Total Parking Spots</p>
              <div className="inputAptContainer">
                <button
                  className="addOrLessButton"
                  onClick={() => setParking(parking - 1)}
                >
                  <b className="addOrLessText">-</b>
                </button>
                <input
                  value={parking}
                  name="parking"
                  onChange={handleChange}
                  className="addOrlessInput"
                />
                <button
                  className="addOrLessButton"
                  onClick={() => setParking(parking + 1)}
                >
                  <b className="addOrLessText">+</b>
                </button>
              </div>
            </div>
            <div style={{ height: "20px" }}></div>
          </div>
        </div>
      </div>
      {error.buildingErrorMessage && (
        <div className="errorContainer">
          <ErrorOutlineIcon style={{ color: "#f44336", marginRight: "10px" }} />
          {error.buildingErrorMessage}
        </div>
      )}
      {error.ExteriorErrorMessage && (
        <div className="errorContainer">
          <ErrorOutlineIcon style={{ color: "#f44336", marginRight: "10px" }} />
          {error.ExteriorErrorMessage}
        </div>
      )}
      <div className="secondFormBtnContainer">
        <div className="chiledsSecondFormBtnContainer">
          <div className="secondSaveBtnContainer">
            <Button variant="text" onClick={OnSaveBtnClick}>
              <span className="secondSaveBtnText">SAVE & NEXT</span>
            </Button>
          </div>
          <div className="secondSaveBtnContainer">
            <Button variant="text">
              <span className="secondSaveBtnText">CANCEL</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SInputSection;
