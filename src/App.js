import React, { Component } from 'react';
import './App.css';
import TextEditorComponent from './Components/TextEditorComponent';
import DisplayComponent from './Components/DisplayComponent';
import * as PIXI from 'pixi.js';
import TableComponent from './Components/TableComponent';

class App extends Component {
 
  onUpdateTextData(textData) {
    textData.textStyle = this.textStyle;
    this.setState(textData);
  }

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      textStyle: {
        align : 'left',
        breakWords: false,
        dropShadow: false,
        dropShadowAlpha: 1,
        dropShadowAngle: Math.PI/6,
        dropShadowBlur: 0,
        dropShadowColor: '#000000',
        dropShadowDistance:	5,
        fill: 'black',
        fillGradientType: 	PIXI.TEXT_GRADIENT.LINEAR_VERTICAL,
        fillGradientStops: [],
        fontFamily: 'Arial',
        fontSize: 26,
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: 'normal',
        letterSpacing: 0,
        lineHeight: 0,
        lineJoin: 'miter',
        miterLimit: 10,
        padding: 0,
        stroke: 'black',
        strokeThickness: 0,
        trim: false,
        textBaseline: 'alphabetic',
        wordWrap: false,
        wordWrapWidth: 100
      }
    };

    this.textStyle = this.state.textStyle;

    this.componentData = {
      headers: ["PIXI-Text Property", "Description", "UserInput"],
      textProps: [{
        propName: "align",
        propValue: "left",
        propDescription: "Hello",
        propInputType: "dropDown",
        propOptions: [{
          value:"left",
          key: "Left"
        }, {
          key: "Right",
          value: "right"
        }, {
          key: "Top",
          value: "top"
        }, {
          key: "Bottom",
          value: "bottom"
        }]
      }, 
      {
        propName: "breakWords",
        propValue: false,
        propDescription: "breakWords",
        propInputType: "dropDown",
        propOptions: [{
          value: true,
          key: "True"
        }, {
          value: false,
          key: "False"
        }]
      },
      {
        propName: "dropShadow",
        propValue: false,
        propDescription: "DropShadow",
        propInputType: "dropDown",
        propOptions: [{
          value: true,
          key: "True"
        }, {
          value: false,
          key: "False"
        }]
      }, 
      ,
      {
        propName: "trim",
        propValue: false,
        propDescription: "Trim",
        propInputType: "dropDown",
        propOptions: [{
          value: true,
          key: "True"
        }, {
          value: false,
          key: "False"
        }]
      },
      ,
      {
        propName: "wordWrap",
        propValue: false,
        propDescription: "wordWrap",
        propInputType: "dropDown",
        propOptions: [{
          value: true,
          key: "True"
        }, {
          value: false,
          key: "False"
        }]
      },
      {
        propName: "fill",
        propValue: "black",
        propDescription: "Hi",
        propInputType: "textBox",
        propOptions:[]
      },
      {
        propName: "dropShadowColor",
        propValue: "#000000",
        propDescription: "dropShadowColor",
        propInputType: "textBox",
        propOptions:[]
      },
      {
        propName: "fontFamily",
        propValue: "Arial",
        propDescription: "fontFamily",
        propInputType: "textBox",
        propOptions:[]
      },
      {
        propName: "fontStyle",
        propValue: "normal",
        propDescription: "Hi",
        propInputType: "textBox",
        propOptions:[]
      },
      {
        propName: "fontVariant",
        propValue: "normal",
        propDescription: "normal",
        propInputType: "textBox",
        propOptions:[]
      },
      {
        propName: "dropShadowColor",
        propValue: "#000000",
        propDescription: "dropShadowColor",
        propInputType: "textBox",
        propOptions:[]
      },
      {
        propName: "fontWeight",
        propValue: "Arial",
        propDescription: "fontWeight",
        propInputType: "textBox",
        propOptions:[]
      },
      {
        propName: "lineJoin",
        propValue: "miter",
        propDescription: "lineJoin",
        propInputType: "textBox",
        propOptions:[]
      },
      {
        propName: "stroke",
        propValue: "black",
        propDescription: "stroke",
        propInputType: "textBox",
        propOptions:[]
      },
      {
        propName: "textBaseline",
        propValue: "alphabetic",
        propDescription: "textBaseline",
        propInputType: "textBox",
        propOptions:[]
      },
      {
        propName: "dropShadowAlpha",
        propValue: 1,
        propDescription: "DropShadow",
        propInputType: "number",
        propOptions:[]
      },
      {
        propName: "dropShadowBlur",
        propValue: 0,
        propDescription: "DropShadowBlur",
        propInputType: "number",
        propOptions:[]
      },
      {
        propName: "dropShadowDistance",
        propValue: 5,
        propDescription: "dropShadowDistance",
        propInputType: "number",
        propOptions:[]
      },
      {
        propName: "fontSize",
        propValue: 26,
        propDescription: "fontSize",
        propInputType: "number",
        propOptions:[]
      },
      {
        propName: "letterSpacing",
        propValue: 0,
        propDescription: "letterSpacing",
        propInputType: "number",
        propOptions:[]
      },
      {
        propName: "lineHeight",
        propValue: 0,
        propDescription: "lineHeight",
        propInputType: "number",
        propOptions:[]
      },
      {
        propName: "miterLimit",
        propValue: 10,
        propDescription: "miterLimit",
        propInputType: "number",
        propOptions:[]
      },
      {
        propName: "padding",
        propValue: 0,
        propDescription: "padding",
        propInputType: "number",
        propOptions:[]
      },
      {
        propName: "strokeThickness",
        propValue: 0,
        propDescription: "strokeThickness",
        propInputType: "number",
        propOptions:[]
      },
      {
        propName: "wordWrapWidth",
        propValue: 100,
        propDescription: "wordWrapWidth",
        propInputType: "number",
        propOptions:[]
      }]
    }
  }

  onUserInput = (e, textProperty) => {
      var value = e.target.value.trim();
  
      if(value === 'true') {
        value  = true;
      } else if(value === 'false') {
        value = false
      } else {
        value  = +value || value;
      }
    
      this.textStyle[textProperty] = value;
  }
  render() {
    return (
      <div class="App container">
        <TextEditorComponent updateTextData= {this.onUpdateTextData.bind(this)}/>
        <TableComponent onChange = {this.onUserInput} data = {this.componentData}></TableComponent>
        <DisplayComponent data = {this.state}/>
      </div>
    );
  }
}

export default App;
