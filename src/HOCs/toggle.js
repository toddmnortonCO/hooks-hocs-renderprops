import React from 'react';

export default function(BaseComponent){
    return class WithToggle extends React.Component {
        state = {
            theme: 'light'
        }

        handleToggle = () => {
            if(this.state.theme === 'light'){
                this.setState({theme: 'dark'})
            } else {
                this.setState({theme: 'light'})
            }
        }

        render(){
            let toggleObj = {
                theme: this.state.theme,
                toggleFn: this.handleToggle
            }

            return <BaseComponent toggleObj={toggleObj} {...this.props}/>
        }
    }
}