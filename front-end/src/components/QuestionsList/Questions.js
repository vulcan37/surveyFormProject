import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import "./question.css";

function Questions() {
  const [addQuestion, setAddQuestion] = useState([1]);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answers, setAnswers] = useState("");
  const [toggle, setToggle] = useState(false);

  const addNewQuestion = () => {
    setAddQuestion((prev) => [...prev, parseInt(prev) + 1]);
  };
  console.log(answers);
  const saveQuestions = () => {
    const questions = {
      questions: question,
      option: [
        {
          option1: option1,
          option2: option2,
          option3: option3,
          option4: option4,
        },
      ],
      answers: [
        {
          answers: answers,
        },
      ],
    };
    axios
      .post("http://localhost:8080/api/questions", questions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="container-fluid mt-3">
        <div className="d-flex justify-content-between">
          <h4>
            <BsArrowLeft /> &nbsp; Create Questions
          </h4>
          <div className="d-flex gap-3">
            <button className="prev">Preview</button>
            <button className="save" onClick={saveQuestions}>
              Save
            </button>
          </div>
        </div>
        {addQuestion.map((ques, index) => {
          return (
            <div className="my-4 question-panel" key={index}>
              <div className="d-flex gap-4">
                <span>Q{index + 1}.</span>
                <label>Question</label>
              </div>
              <div className="mx-5 question">
                <input
                  type="text"
                  placeholder="Enter Questions"
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <div className="mx-4">
                <div className="answer">
                  <input
                    type="radio"
                    name="option"
                    value={option1}
                    onChange={(e) => setAnswers(e.target.value)}
                  />{" "}
                  <span className="choice">
                    <input
                      type="text"
                      placeholder="option1"
                      onChange={(e) => setOption1(e.target.value)}
                    />
                  </span>{" "}
                  <br />
                </div>
                <div className="answer">
                  <input
                    type="radio"
                    name="option"
                    value={option2}
                    onChange={(e) => setAnswers(e.target.value)}
                  />{" "}
                  <span className="choice">
                    <input
                      type="text"
                      placeholder="option2"
                      onChange={(e) => setOption2(e.target.value)}
                    />
                  </span>{" "}
                  <br />
                </div>
                <div className="answer">
                  <input
                    type="radio"
                    name="option"
                    value={option3}
                    onChange={(e) => setAnswers(e.target.value)}
                  />{" "}
                  <span className="choice">
                    <input
                      type="text"
                      placeholder="option3"
                      onChange={(e) => setOption3(e.target.value)}
                    />
                  </span>{" "}
                  <br />
                </div>
                <div className="answer">
                  <input
                    type="radio"
                    name="option"
                    value={option4}
                    onChange={(e) => setAnswers(e.target.value)}
                  />{" "}
                  <span className="choice">
                    <input
                      type="text"
                      placeholder="option4"
                      onChange={(e) => setOption4(e.target.value)}
                    />
                  </span>{" "}
                  <br />
                </div>
              </div>
              {!toggle && (
                <div className="display-popup">
                  <AiFillSetting
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      console.log(index);
                    }}
                  />
                </div>
              )}
              {toggle && (
                <div className="question-type">
                  <span>
                    <RxCross2
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setToggle(false);
                        console.log(index);
                      }}
                    />
                  </span>
                  <div className="d-flex flex-column justify-content-center align-items-center mt-2">
                    <h6>Question Type</h6>
                    <select>
                      <option>Multiple Choice</option>
                      <option>One Liner</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="text-center">
          <button className="add-question" onClick={addNewQuestion}>
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
