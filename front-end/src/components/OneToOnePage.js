import React, { useState } from 'react';

function OneToOnePage({ questions, options, selectedOptions, handleOptionChange, skipEnabled, inputType, onHandleSubmit }) {
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
    <div className='question-class'>
      <h3 className='question-number '>{`Question ${currentPage + 1}`}</h3>
      <div>{questions[currentPage]}</div>
      <ul className='options-class'>
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
      <div className='button-group-for-OneToOnePage'>
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === questions.length - 1 || selectedOptions[currentPage] === undefined}>
          Next
        </button>
        {skipEnabled && <button onClick={handleSkipClick} disabled={currentPage === questions.length - 1}>Skip</button>}
        {currentPage === questions.length - 1 && <button onClick={onHandleSubmit} className='submitbutton'>submit</button>}
      </div>
    </div >)
}
export default OneToOnePage