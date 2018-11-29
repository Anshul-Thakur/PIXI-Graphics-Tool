import React from 'react';

class TextBoxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            propValue : this.props.defaultValue
        }; 
    }
    onChange = (e) => {
        this.setState({
            propValue : e.target.value
        });
        this.props.onChange(e, this.props.textProp);
    }
    
    render() {
        return(
            <div>
               <input value={this.state.propValue} onChange = {this.onChange.bind(this)} type="text"></input> 
            </div>
        );
    }
}

export default  TextBoxComponent;