import React from 'react';

class NumberComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            propValue : this.props.defaultValue
        }; 
    }

    onChange = (e) => {
        if(e.target.value<0) {
            e.target.value = "0";
        }
        this.setState({
            propValue : e.target.value
        });
        this.props.onChange(e, this.props.textProp);
    }

    render() {
        return(
            <div>
               <input min="0" value = {this.state.propValue} onChange = {this.onChange.bind(this)} type="number"></input> 
            </div>
        );
    }
}

export default  NumberComponent;