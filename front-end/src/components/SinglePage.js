
function SinglePage({ surveyQuestions, surveyOptions, selectedOptions, handleOptionChange, inputType, onHandleSubmit, theme }) {

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onHandleSubmit();

    }}>
      {surveyQuestions.map((question, index) => (
        <div key={index} className={`question-class${theme}`}>
          <h3 className={`question-number${theme}`}> {`Question ${index + 1}`}</h3>
          <div className={`question-text${theme}`}>{question}</div>
          {theme === 'Theme3' && <div style={{ fontSize: 'smaller' }}>choose one of the options</div>}
          <ul className={`options-class${theme}`}>
            {surveyOptions[index].map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type={inputType}
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
      <button type="submit" className={`submit-button-for-single-page${theme}`}>Submit</button>
    </form>
  );
}

export default SinglePage;