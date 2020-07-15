import React, {Component} from 'react';

class ThemeChanger extends Component {
    render(){
        return(
            <div className={this.props.themeObj.theme}>
                <button className='toggle-btn' onClick={this.props.themeObj.toggleFn}>
                    {this.props.themeObj.theme}
                </button>
            </div>
        )
    }
}

export default ThemeChanger;