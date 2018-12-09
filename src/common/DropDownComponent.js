import React from 'react';

class DropDownComponent extends React.Component {

    getOptions = () => {
        var propsData = this.props.data;

        return propsData.propOptions.map((option, index)=>{
            if(option.value === propsData.propValue) {
                return <option key = {"drop-down-selected"} selected value ={option.value}>{option.key}</option>
            } else {
                return <option key = {"drop-down-unselected" + index} value ={option.value}>{option.key}</option>
            }
           
        })
    }

    handleOnChange = (e)=> {
        var value = e.target.value;

        value = +value || value;

        value = value === "0" ? 0 : value;
        this.props.onChange(value, this.props.data.propName)
    }

    render() {
        return(
            <div>
               <select onChange = {this.handleOnChange}>
                   {this.getOptions()}
                </select> 
            </div>
        );
    }
}

export default  DropDownComponent;