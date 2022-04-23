import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    
<Navbar title="TextFormatter"/>
  <div className="container">
    <TextForm heading="Enter the text to apply"/>
    {/* <About /> */}
  </div>
    </>
  );
}

export default App;
