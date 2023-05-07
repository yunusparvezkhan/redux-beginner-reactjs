import React from "react";
import SongsList from "./components/SongsList";

import './styles/stylelib.css';

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide" >
          <SongsList className="songListCom" />
        </div>
      </div>
    </div>
  );
}

export default App;
