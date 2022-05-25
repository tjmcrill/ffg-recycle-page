import React, { useState } from 'react';
import CameraLayout from './layout/CameraLayout';
import './App.css';



const App = () => {
  const [showCamera, setShowCamera] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => setShowCamera(true)}> Camera </button>
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
