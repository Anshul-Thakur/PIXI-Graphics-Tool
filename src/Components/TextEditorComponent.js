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
            <div>
                <input required onChange= {this.onTextChange.bind(this)} type = "text" ></input>
                <button onClick = {()=> {this.props.updateTextData(this.textData)}}>Compile</button>
            </div>
        );
    }
}

export default  TextEditorComponent;