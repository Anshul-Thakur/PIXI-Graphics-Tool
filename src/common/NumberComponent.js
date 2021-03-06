import React from 'react';

class NumberComponent extends React.Component {
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
               <input value  = {this.state.propValue} onChange = {this.onChange.bind(this)} type="number"></input> 
            </div>
        );
    }
}

export default  NumberComponent;