import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateSurveyList = () => {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [typeOfSurvey, setTos] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [criteria, setCriteria] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("key"));
    axios
      .post("http://localhost:5000/api/v1/listupdate", { id })
      .then((res) => {
        setData(res.data);
        setName(res.data.name);
        setDesc(res.data.description);
        setTos(res.data.typeOfSurvey);
        setStartDate(res.data.startDate);
        setEndDate(res.data.endDate);
        setCriteria(res.data.criteria);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const updateHandler = () => {
    const data = {
      id: id,
      name: name,
      description: description,
      typeOfSurvey: typeOfSurvey,
      startDate: startDate,
      endDate: endDate,
      criteria: criteria,
    };

    axios
      .post("http://localhost:5000/api/v1/update", data)
      .then((res) => {
        swal("Good job!", `${res.data.message}`, "success");
        setTimeout(() => {
          navigate("/");
          localStorage.removeItem("key");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="container-fluid mt-3">
        <div className="d-flex justify-content-between">
          <h4>Create Survey</h4>
          <div className="d-flex gap-3">
            <button className="cancel" onClick={() => navigate("/")}>
              Cancel
            </button>
            <button className="next" onClick={updateHandler}>
              Update
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
                    value={name}
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
                    value={description}
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
                    value={typeOfSurvey}
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
                      value={startDate.split("T")[0]}
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
                      value={endDate.split("T")[0]}
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
                    value={criteria}
                    onChange={(e) => {
                      setCriteria(e.target.value);
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
};

export default UpdateSurveyList;
