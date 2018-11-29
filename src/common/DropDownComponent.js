import React from 'react';

class DropDownComponent extends React.Component {

    getOptions = () => {
        return this.props.propsOptions.map((option)=>{
            if(option.value === this.props.defaultValue) {
                return <option selected value ={option.value}>{option.key}</option>
            } else {
                return <option value ={option.value}>{option.key}</option>
            }
           
        })
    }

    render() {
        return(
            <div>
               <select onChange = {(e) => {this.props.onChange(e, this.props.textProp)}}>
                   {this.getOptions()}
                </select> 
            </div>
        );
    }
}

export default  DropDownComponent;