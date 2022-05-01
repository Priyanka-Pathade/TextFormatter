import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{    //alert will dismiss after this timeout
        setAlert(null);
      },2000);
  }

  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled!","success");
}
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled!","success");

    }
  }
    return (
    <>
    <Router>
    <Navbar title="TextFormatter" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
          <Route exec path="/about" element={<About/>} />
          <Route exec path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to apply" mode={mode}/>} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
