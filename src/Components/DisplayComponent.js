import React from 'react';
import * as PIXI from 'pixi.js';

class DisplayComponent extends React.Component {
    constructor(props) {
        super(props);

        this.app = new PIXI.Application({backgroundColor: 0x1099bb});
        
    }
    componentDidMount = () => {
        document.getElementById('root').append(this.app.view);
    }

    render() {
        var textConfig = this.props.data;

        this.app.stage.removeChild(this.container);

        this.container = new PIXI.Container();
        this.container.height = "300px";
        this.container.width= "500px";
        
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