import React, {Component} from 'react';
import toggle from '../HOCs/toggle';
import './ThemeChanger.css';

class ThemeChanger extends Component {
    render(){
        return(
            <div className={this.props.toggleObj.theme}>
                <button 
                    className='toggle-btn' 
                    onClick={this.props.toggleObj.toggleFn}>
                        {this.props.toggleObj.theme}
                </button>
            </div>
        )
    }
}

export default toggle(ThemeChanger);