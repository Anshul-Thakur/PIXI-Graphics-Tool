import React from 'react';

class NumberComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            propValue : this.props.data.propValue
        }; 
    }

    onChange = (e) => {
        if(e.target.value<0) {
            e.target.value = "0";
        }
        this.setState({
            propValue : e.target.value
        });
        this.props.onChange(e, this.props.data.propName);
    }

    render() {
        return(
            <div>
               <input min={this.props.data.min || "0"} max = {this.props.data.max || "1000"} step= {this.props.data.step || "1"} value = {this.state.propValue} onChange = {this.onChange.bind(this)} type="number"></input> 
            </div>
        );
    }
}

export default  NumberComponent;