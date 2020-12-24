import React from 'react';
import './App.css';
import Navbar from "./components/compounds/Navbar";
import Footer from "./components/compounds/Footer";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className={"testing"} style={{width:"100%", height:"80vh", background:"purple"}}>

     </div>

     <Footer/>

    </div>
  );
}

export default App;
