import React from 'react';

class TextBoxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            propValue : this.props.data.propValue
        }; 
    }
    onChange = (e) => {
        var value = e.target.value.trim(),
            cleanValue = true;

        if (this.props.data.propName === "fillGradientStops") {
            value.split(',').forEach(element => {
                if(+element>1||isNaN(+element)) {
                    alert("Inserted Value should be between (0.0, 1.0) and seperated by ',' if multiple fill is given. Example if fill has 3 values give value as (0.1,0.1,0.8)");
                    cleanValue = false;
                } 
            });
        }
        
        value = cleanValue ? value : "";

        this.setState({
            propValue : value
        });

        this.props.onChange(value, this.props.data.propName);
    }
    
    render() {
        var propdsData = this.props.data;
        return(
            <div>
               <input name ={propdsData.propName} value={this.state.propValue} onChange = {this.onChange.bind(this)} type="text"></input> 
            </div>
        );
    }
}

export default  TextBoxComponent;