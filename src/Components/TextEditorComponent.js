import React from 'react';

class TextEditorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "" 
        };
    }

    onTextChange(e) {
        this.setState({
            text: e.target.value
        });
    } 
    render() {
        return(
            <div >
                <div>
                    <div className = "textField-Header">Please Enter The Text</div>
                    <div>
                        <input className = "textField" required onChange= {this.onTextChange.bind(this)} type = "text" ></input>
                        <button disabled={!this.state.text} onClick = {()=> {this.props.updateTextData(this.state)}}>Compile</button>
                    </div>
                </div>               
            </div>
        );
    }
}

export default  TextEditorComponent;