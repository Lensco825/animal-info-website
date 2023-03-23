import React from "react";
import "./index.css";
import {NAV} from './nav.js'
import {bearContent} from './bear.js';
import {owlContent} from './owl.js';
import { dolphinContent } from "./dolphin";
import { catContent } from "./cat";
import { Route, Routes, Link} from "react-router-dom";


var images = {
  owl: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  bear: 'https://i.pinimg.com/736x/e6/a1/77/e6a17731d8ab49113dc4f1a61a2a0e8e.jpg',
  dolphin: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  cat: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
}



function App() {
  return (
    <div className="App">
      <NAV/>
      <main>
      <h1>Animal Info</h1>
      <h2>Learn more about some of these animals!</h2>
    <div className="AnimalSelection">
     <div className="Owls">
      <Link to="/owl">
      <img src={images.owl} alt='owl' className="coverImage"></img>
      </Link>
      </div>
     <div className="grizzlyBears">
      <Link to="/bear">
      <img src={images.bear} alt='bear' className="coverImage"></img>
      </Link>
      </div>
     <div className="dolphins">
      <Link to="/dolphins">
      <img src={images.dolphin} alt='dolphin' className="coverImage"></img>
     </Link>
     </div>
     <div className="cats">
     <Link to="/cat">
      <img src={images.cat} alt='cat' className="coverImage"></img>
     </Link>
     </div>
    </div>
    <Routes>
      <Route path="/bear" element={bearContent} />
      <Route path="/cat" element={catContent} />
      <Route path="/owl" element={owlContent} />
      <Route path="/dolphin" element={dolphinContent} />
      <Route path="/" exact element={App} />
    </Routes>
    </main>
    {bearContent()}
    </div>
  );
}

export default App;
