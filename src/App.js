import React from 'react';
import ThemeChanger from './Components/ThemeChanger';
import RenderProp from './Components/RenderProp';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ThemeChanger /> */}
      <RenderProp render={(theme, toggleFn) => (
        <div className={theme}>
          <button className='toggle-btn' onClick={toggleFn}>{theme}</button>
        </div>
      )}/>
    </div>
  );
}

export default App;
