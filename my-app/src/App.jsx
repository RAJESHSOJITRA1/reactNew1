import './App.css'
import About from "./component/About";
import { useState } from "react";
import Navbar from "./component/Navbar";
import Textforms from "./component/Textforms";
import Alerts from './component/Alerts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState("light");

  const showAlert=(msg,type)=>{
    setAlert({
        message:msg,
        type:type
    })
    setTimeout(()=>{
      setAlert("light");
    },1000);
  }

    const  removebgClass=()=>{
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-dark');
      document.body.classList.remove('bg-primary');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-warning');
      document.body.classList.remove('bg-danger');
    }

  const togglemode=(cls)=>{
    removebgClass();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor="#495057";
        document.body.style.color="white";
        showAlert('Darkmode enabled',"success")
        // document.title="Text utils=darkmode"
      }
      else{
        setMode("light");
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        showAlert("Lightmode Enabled","success")
      }
  }


  return (
    <>
     {/* <Navbar mode={mode} togglemode={togglemode} />
     <Alerts alert={alert} />
     <Textforms showAlert={showAlert} /> */}
    {/* <About path="/about"></About> */}


     <Router>
      <Navbar mode={mode} togglemode={togglemode} />
      <Alerts alert={alert} />
     <Routes>
        <Route path="/" element={<Textforms showAlert={showAlert} />} />
    </Routes>
    <Routes>
    <Route path="/about" element={<About/> }  ></Route>
    </Routes>
    <Routes>
    <Route path="/textforms" element={ <Textforms showAlert={showAlert} />}/>
    </Routes>
    </Router> 
  
    {/* <Router>
    <Routes>
    <Route path="/about" element={<About/> }  ></Route>
    <Route path="/textforms" element={ <Textforms showAlert={showAlert} />}/>
    </Routes>
    </Router> */}

    {/* <Route path="/" element={<Navbar mode={mode} togglemode={togglemode}/> } /> */}


    {/* <Navbar mode={mode} togglemode={togglemode}/>     
    <Alerts alert={alert} />
    <Textforms showAlert={showAlert} />
<About/>  */}
{/* <Navbar text="textutils" abouttext="about textutils" /> */}

    </>
  )
}

export default App

