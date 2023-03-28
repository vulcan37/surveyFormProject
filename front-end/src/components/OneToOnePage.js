import React, { useState } from 'react';

function OneToOnePage({ questions, options, selectedOptions, handleOptionChange, skipEnabled, inputType, onHandleSubmit, theme }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleSkipClick = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={`question-class${theme}`}>
      <h3 className={`question-number${theme}`}>{`Question ${currentPage + 1}`}</h3>
      <div className={`question-text${theme}`}>{questions[currentPage]}</div>
      {theme === 'Theme3' && <div style={{ fontSize: 'smaller' }}>choose one of the options</div>}
      <ul className={`options-class${theme}`}>
        {options[currentPage].map((option, optionIndex) => (
          <li key={optionIndex}>
            <label>
              <input
                type={inputType}
                value={optionIndex}
                checked={selectedOptions[currentPage] === optionIndex}
                onChange={() => handleOptionChange(currentPage, optionIndex)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <div className={`button-group-for-OneToOnePage${theme}`}>
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === questions.length - 1 || selectedOptions[currentPage] === undefined}>
          Next
        </button>
        {skipEnabled && <button onClick={handleSkipClick} disabled={currentPage === questions.length - 1}>Skip</button>}
        {currentPage === questions.length - 1 && <button onClick={onHandleSubmit} className={`submitbutton${theme}`}>submit</button>}
      </div>
    </div >)
}
export default OneToOnePage