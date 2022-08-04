import React from "react";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card
      ratting='5.0'
      reviweCount={6}
      country="USA"
      title="Life lessons with Katie Zaferes"
      price={136}
      />
    </div>
  );
}

export default App;
