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

    render() {
        return(
            <div>
               <select onChange = {(e) => {this.props.onChange(e, this.props.data.propName)}}>
                   {this.getOptions()}
                </select> 
            </div>
        );
    }
}

export default  DropDownComponent;