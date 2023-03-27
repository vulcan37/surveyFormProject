import ThemeSettings from "./components/ThemeSettings";
import { useState } from "react";
import './App.css';
import Preview from "./components/Preview";
function ThemeApp() {
  const [theme, setTheme] = useState({
    theme: 'light',
    name: 'Theme1',
    type: 'survey',
    formType: 'One to one',
    font: 'Roboto',
    color: 'black',
    mandatory: 'yes',
    skipButton: 'no',
    optionType: 'radio'
  });

  const [showThemeSettings, setShowThemeSettings] = useState(false);
  const questions = ['this is question1', 'this is question2', 'this is question3'];
  const options = [['option1', 'option2', 'option3'], ['option1', 'option2'], ['option1', 'option2', 'option3', 'option4']]

  function saveThemeSettings(updatedTheme) {
    // Save the updated theme to the database or state
    setTheme(updatedTheme);
  }

  function closeThemeSettings() {
    setShowThemeSettings(false);
  }

  return (
    <div className="App">
      <button onClick={() => setShowThemeSettings(true)}>Theme Settings</button>
      {showThemeSettings && <ThemeSettings theme={theme} save={saveThemeSettings} close={closeThemeSettings} />}

      <div className="button-group">
        <h3 style={{}}>🡠 Preview</h3>
        <button
          className="close-Preview"
        >
          Close Preview
        </button>
        <button
          className="save-button"
        >
          Save
        </button>
      </div>

      <Preview surveyQuestions={questions} surveyOptions={options} themeSettings={theme} />
    </div >

  );
}

export default ThemeApp;
