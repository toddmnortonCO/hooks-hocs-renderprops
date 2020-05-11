import React, {Component} from 'react';
import ThemeChanger from './Components/ThemeChanger';
import RenderProp from './Components/RenderProp';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <ThemeChanger />
        {/* <RenderProp render={(theme, toggleFn) => (
          <div className={theme}>
            <button className='toggle-btn' onClick={toggleFn}>{theme}</button>
          </div>
        )}/> */}
      </div>
    )
  }
}

export default App;