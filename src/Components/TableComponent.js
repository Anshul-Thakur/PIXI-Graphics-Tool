import React from 'react';
import DropDownComponent from  '../common/DropDownComponent';
import TextBoxComponent from  '../common/TextBoxComponent';
import NumberComponent from '../common/NumberComponent';

class TableComponent extends React.Component {

    getHeaders = () => {
        return this.props.data.headers.map((header, index)=>{
            return <th key={"heading-textprops-" + index} scope="col">{header}</th>});
    }

    getPropsAsRows = () => {
        return this.props.data.textProps.map((propObj, index)=>{
            var ComponentType;
            
            switch(propObj.propInputType) {
                case "dropDown" :
                    ComponentType = DropDownComponent;
                    break;
                case "textBox" :
                    ComponentType = TextBoxComponent;
                    break;
                case "number" : 
                    ComponentType = NumberComponent;
                    break;
                default :
                    ComponentType = TextBoxComponent;
            }
            return <tr key={"row-textProps-" +index}>
                <td>{propObj.propName}</td>
                <td>{propObj.propDescription}</td>
                <td>
                    <ComponentType onChange = {this.props.onChange} textProp= {propObj.propName} defaultValue= {propObj.propValue} propsOptions={propObj.propOptions}> </ComponentType>
                </td>
            </tr>
        });
    }
   
    render() {
        return(
            <div className="textPropertiesContainer">
               <table className="table table-bordered table-striped">
                   <thead>
                       <tr>
                        {this.getHeaders()}
                       </tr> 
                   </thead>
                   <tbody>
                   {this.getPropsAsRows()}
                   </tbody>
               </table>
            </div>
        );
    }
}

export default  TableComponent;