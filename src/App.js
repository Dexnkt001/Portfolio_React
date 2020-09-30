import React from "react";
import Header from "./Header";
import Me from "./main/Me";
import My_Works from "./main/My_Works";
import Contact from "./main/Contact";

function App() {
  return (
    <div className="Wraper">
      <Header />
      <Me />
      <My_Works />
      <Contact />
    </div>
  );
}

export default App;
