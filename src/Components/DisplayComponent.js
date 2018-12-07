import React from 'react';
import * as PIXI from 'pixi.js';

class DisplayComponent extends React.Component {
    constructor(props) {
        super(props);

        this.app = new PIXI.Application({backgroundColor: 0x1099bb});
        
    }
    componentDidMount = () => {
        var canvasWrapper = document.createElement("div"),
            canvasContainer;
        canvasWrapper.appendChild(this.app.view);
    
        canvasWrapper.className = "canvas-wrapper";
        canvasContainer = document.createElement("div");
        canvasContainer.className = "container canvas-container";
        canvasContainer.appendChild(canvasWrapper);
        document.getElementById('root').append(canvasContainer);
    }

    render() {
        var textConfig = this.props.data;

        this.app.stage.removeChild(this.container);

        this.container = new PIXI.Container();
        //this.container.height = "300px";
        //this.container.width= "500px";
        
        // Starting the text modification from here.
        this.text = new PIXI.Text(
                textConfig.text, // Text
                textConfig.textStyle // Text Style
            );
        this.container.addChild(this.text);
        this.app.stage.addChild(this.container);
       
        return(
            <div>
            </div>
        );
    }
}

export default  DisplayComponent;