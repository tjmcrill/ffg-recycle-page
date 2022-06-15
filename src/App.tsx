import React, { useState } from 'react';
import CameraLayout from './layout/CameraLayout';
import Button from "@material-ui/core/Button";
import './App.css';



const App = () => {
  const [showCamera, setShowCamera] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Photo Upload Page.
        </p>
        <Button variant="contained" onClick={() => setShowCamera(true)}> Camera </Button>
        {
          showCamera? (
            <CameraLayout shouldShow={showCamera} changeShouldShowCamera={setShowCamera}/>
          ):
          <div></div>
        }
      </header>
    </div>
  );
};

export default App;
