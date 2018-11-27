import React from 'react';
import * as PIXI from 'pixi.js';

class DisplayComponent extends React.Component {
    constructor(props) {
        super(props);

        this.app = new PIXI.Application(800, 600, {backgroundColor: 0x1099bb});
        document.body.appendChild(this.app.view);
    }
    render() {
        var textConfig = this.props.data;

        this.app.stage.removeChild(this.text);

        // Starting the text modification from here.
        this.text = new PIXI.Text(
                textConfig.text, // Text
                textConfig.textStyle // Text Style
            );
        
        this.app.stage.addChild(this.text);
       
        return(
            <div>
            </div>
        );
    }
}

export default  DisplayComponent;