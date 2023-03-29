import React, { useState, useEffect } from "react";

function ThemeSettings({ save, close }) {
  const [theme, setTheme] = useState("light");
  const [name, setName] = useState("Theme1");
  const [type, setType] = useState('survey');
  const [formType, setFormType] = useState('One to one');
  const [mandatory, setMandatory] = useState('yes');
  const [skipButton, setSkipButton] = useState('no');
  const [optionType, setOptionType] = useState('radio');
  const [color, setColor] = useState("black");
  const [font, setFont] = useState("Roboto");

  const handleSave = () => {
    // Save the theme settings
    const newTheme = {
      theme, name, type, formType, mandatory, skipButton, optionType, color, font
    };
    console.log(newTheme)
    save(newTheme);
    close();
  };

  const handleCancel = () => {
    close();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="theme-header">
          <h4 className="theme-h2" style={{ display: "inline-block", font: "normal normal bold 20px/25px Helvetica Neue" }}>
            Theme Settings{" "}
          </h4>
          <div className="cancel-button" onClick={close}>
            <span className="material-symbols-outlined">
              close
            </span>
          </div>
        </div>
        <form>
          <div className="theme-type-header">
            <div>Theme</div>
            <select id="theme-mode" value={theme} onChange={e => setTheme(e.target.value)}>
              <option value="light">light</option>
              <option value="dark">dark(disabled)</option>
            </select>
            <br />
          </div>
          <div className="row1">
            <div className="row-items">Theme name</div>
            <div className="row-items">Theme type</div>
            <div>Form-type</div>
          </div>
          <div>
            <select className="row2" value={name} onChange={e => setName(e.target.value)}>
              <option value="Theme1">Theme1</option>
              <option value="Theme2">Theme2</option>
              <option value="Theme3">Theme3</option>
              <option value="Theme4">Theme4(plain html)</option>

            </select>
            <select className="row2" value={type} onChange={e => setType(e.target.value)}>
              <option value="survey">survey</option>
            </select>
            <select className="row2" value={formType} onChange={e => setFormType(e.target.value)}>
              <option value="One to one">One to one</option>
              <option value="single-page">single-page</option>
            </select>
          </div>
          <div className="row1">
            <div className="row-items unique-row-item">
              All question madatory
            </div>
            <div className="row-items">Enable skip</div>
            <div>Option-type</div>
          </div>
          <div className="margin-bot-for-row2">
            <select className="row2 " value={mandatory} onChange={e => setMandatory(e.target.value)}>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
            <select className="row2" value={skipButton} onChange={e => setSkipButton(e.target.value)}>
              <option value="no">no</option>
              <option value="yes">yes</option>
            </select>
            <select className="row2" value={optionType} onChange={e => setOptionType(e.target.value)}>
              <option value="radio">radio</option>
              <option value="checkbox">box</option>

            </select>
          </div>
          <div className="row1">
            <div className="row-items" style={{ marginRight: "235px" }}>
              Font
            </div>
            <div className="row-items">Colour</div>
          </div>
          <div className="bottom-padding">
            <select className="row2" value={font} onChange={e => setFont(e.target.value)}>
              <option value="Roboto">Roboto</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Georgia">Georgia</option>
              <option value="Verdana">Verdana</option>
            </select>
            <select className="row2" value={color} onChange={e => setColor(e.target.value)}>
              <option value="black">black</option>
              <option value="white">white</option>
              <option value="green">green</option>
              <option value="#ff0c2f">pink</option>
              <option value="blue">blue</option>
              <option value="darkorange">darkorange</option>
            </select>
          </div>
          {/* <label>Font:</label>
          <input
            type="text"
            value={font}
            onChange={(e) => setFont(e.target.value)}
          /> */}
          <div className="button-group">
            <button
              onClick={handleCancel}
              className="cancelButton"
              style={{
                border: "2px solid #707070",
                borderRadius: "4px", width: "100px", height: "40px",
                font: "normal normal bold 11px / 14px Helvetica Neue", color: "#6A6A6A"
              }}
            >
              CANCEL
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: "#278df1", color: "white", borderRadius: "4px", width: "100px", height: "40px",
                font: "normal normal bold 11px / 14px Helvetica Neue"
              }}
            >
              SAVE
            </button>
          </div>
        </form>
      </div >
    </div >
  );
}

export default ThemeSettings;
