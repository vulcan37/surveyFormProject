import React, { useState } from "react";
import OneToOnePage from './OneToOnePage';
import SinglePage from './SinglePage'

const Preview = ({ surveyQuestions, surveyOptions, themeSettings }) => {
  const [error, setError] = useState(true)

  const [selectedOptions, setSelectedOptions] = useState({});
  const handleOptionChange = (questionIndex, optionIndex) => {

    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: optionIndex
    });
  };
  const onHandleSubmit = () => {
    if (themeSettings.mandatory === 'yes') {
      const responsesCheck = surveyQuestions.every((question, index) => selectedOptions[index] !== undefined);
      setError(responsesCheck);
    }
  }


  return (
    <div
      style={{
        backgroundColor: themeSettings.backgroundColor,
        color: themeSettings.color,
        fontFamily: themeSettings.font
      }}
    >
      {/* <h2>{themeSettings.title}</h2>
      <form>
        {surveyQuestions.map((question, index) => (
          <div key={index}>
            <h4>{question}</h4>
            <ul>
              {surveyOptions[index].map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      name={index}
                      value={optionIndex}
                      checked={selectedOptions[index] === optionIndex}
                      onChange={() => handleOptionChange(index, optionIndex)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form> */}
      {themeSettings.formType === 'One to one' && <OneToOnePage questions={surveyQuestions} options={surveyOptions} handleOptionChange={handleOptionChange} selectedOptions={selectedOptions} skipEnabled={themeSettings.skipButton === 'yes' ? true : false} inputType={themeSettings.optionType} onHandleSubmit={onHandleSubmit} theme={themeSettings.name} />}
      {themeSettings.formType === 'single-page' && <SinglePage surveyQuestions={surveyQuestions} surveyOptions={surveyOptions} handleOptionChange={handleOptionChange} selectedOptions={selectedOptions} inputType={themeSettings.optionType} onHandleSubmit={onHandleSubmit} theme={themeSettings.name} />}
      {!error && <div style={{ color: 'red' }}>All Questions are mandatory</div>}
    </div>
  );
};

export default Preview;