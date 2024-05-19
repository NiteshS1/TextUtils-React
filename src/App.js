import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Darkmode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Lightmode";
    }
  }

  const toggleModeGreen = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "Green";
      showAlert("Green mode has been enabled", "success");
      document.title = "TextUtils - Darkmode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Lightmode";
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} toggleModeGreen={toggleModeGreen}/>
      <Alert alert={alert}/>
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/TextForm" element={<TextForm headers="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
          </Routes>
          {/* <TextForm headers="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> */}
        </div>
      </Router>
    </>
  );
}


export default App;
