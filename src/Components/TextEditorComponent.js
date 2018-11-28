import React from 'react';

class TextEditorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.textData = {};
    }

    onTextChange(e) {
        this.textData.text = e.target.value;
    } 
    render() {
        return(
            <div class= "container">
                <div class>
                    <div class = "textField-Header">Please Enter The Text</div>
                    <div>
                        <input class = "textField" required onChange= {this.onTextChange.bind(this)} type = "text" ></input>
                        <button onClick = {()=> {this.props.updateTextData(this.textData)}}>Compile</button>
                    </div>
                </div>               
            </div>
        );
    }
}

export default  TextEditorComponent;