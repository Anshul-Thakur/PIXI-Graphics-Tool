import React from 'react';

class TextEditorComponent extends React.Component {
    onTextChange(e) {
        var data = {};

        data.text = e.target.value;
        this.props.updateTextData(data);
    } 
    render() {
        return(
            <div className={"container"}>
                <div className = "textField-Header">Please Enter The Text</div>
                <div>
                    <input className = "textField" required onChange= {this.onTextChange.bind(this)} type = "text" ></input>
                </div>             
            </div>
        );
    }
}

export default  TextEditorComponent;