import React, { useEffect, useState } from "react";
import "./surveyStyle.css";
import { BsFilterLeft } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SurveyList() {
  const [surveyData, setSurveyData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/list").then((res) => {
      setSurveyData(res.data);
    });
  }, []);

  const deleteSurvey = async (id) => {
    console.log(id);
    await axios
      .post("http://localhost:8080/api/delete", { id })
      .then((res) => {
        swal("Good job!", `${res.data.message}`, "success");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between m-3">
        <div className="d-flex gap-4">
          <span>Survey List</span>
          <span>
            <BiSearch />
          </span>
        </div>
        <div className="d-flex gap-4">
          <span>
            <BsFilterLeft />
          </span>
          <span>
            <FaFilter />
          </span>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/create");
            }}
          >
            Create
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr className="table-head">
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-data">
          {surveyData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.typeOfSurvey}</td>
                <td>{(data.startDate).split("T")[0]}</td>
                <td>{(data.endDate).split("T")[0]}</td>
                <td>
                  <FiEdit2
                    onClick={() => {
                      localStorage.setItem("key", data._id);
                      navigate("/update");
                    }}
                  />
                  &nbsp;&nbsp;
                  <MdDelete onClick={() => deleteSurvey(data._id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SurveyList;
