import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./createSurvey.css";

function CreateSurvey() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [typeOfSurvey, setTos] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [criteria, setCriteria] = useState("");
  const [img, setImg] = useState();
  const navigate = useNavigate();

  const surveyDataStore = async () => {
    const data = {
      name: name,
      description: desc,
      typeOfSurvey: typeOfSurvey,
      startDate: startDate,
      endDate: endDate,
      criteria: criteria,
      img: img,
    };
    await axios
      .post("http://localhost:5000/api/v1/createsurvey", data, img)
      .then((res) => {
        console.log(res);
        setName("");
        setDesc("");
        setStartDate("");
        setEndDate("");
        setCriteria("");
        setTos("");
        swal("Good job!", `${res.data.message}`, "success");
        setTimeout(() => {
          navigate("/questions");
        }, 2000);
      })
      .catch((err) => {
        swal("Good job!", `${err.message}`, "success");
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="container-fluid mt-3">
        <div className="d-flex justify-content-between">
          <h4>Create Survey</h4>
          <div className="d-flex gap-3">
            <button className="cancel" onClick={() => navigate("/list")}>
              Cancel
            </button>
            <button className="next" onClick={surveyDataStore}>
              Next
            </button>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="field-container">
                <div>
                  <label>Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    style={{ height: "50px" }}
                    placeholder="Name here"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="field-container">
                <div>
                  <label>Description</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="desc"
                    placeholder="Descriptions"
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="field-container">
                <div>
                  <label>Type of Survey</label>
                </div>
                <div>
                  <select
                    className="field-select"
                    onChange={(e) => {
                      setTos(e.target.value);
                    }}
                  >
                    <option>Select</option>
                    <option>Visit</option>
                    <option>Feedback</option>
                    <option>Product</option>
                    <option>Family</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="vl"></div>
            </div>
            <div className="col-5">
              <div className="field-container">
                <div>
                  <span>
                    <label>Start Date</label>
                    <input
                      type="date"
                      className="field-date"
                      onChange={(e) => {
                        setStartDate(e.target.value);
                      }}
                    />
                  </span>
                  <span>
                    <label>End Date</label>
                    <input
                      type="date"
                      className="field-date"
                      onChange={(e) => {
                        setEndDate(e.target.value);
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="field-container">
                <div>
                  <label>Other Criteria</label>
                </div>
                <div>
                  <input
                    type="text"
                    style={{ height: "93px" }}
                    placeholder="Other criteria"
                    onChange={(e) => {
                      setCriteria(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="field-container">
                <div>
                  <label>Upload Image</label>
                </div>
                <div className="file">
                  <input
                    type="file"
                    placeholder="Drag and Drop to upload"
                    onChange={(e) => {
                      setImg(e.target.files[0].name);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSurvey;
