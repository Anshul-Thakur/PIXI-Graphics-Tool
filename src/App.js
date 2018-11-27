import React, { Component } from 'react';
import './App.css';
import CanvasComponent from './Components/CanvasComponent';
import TextEditorComponent from './Components/TextEditorComponent';
import DisplayComponent from './Components/DisplayComponent';
import * as PIXI from 'pixi.js';

class App extends Component {

  onUpdateTextData(textData) {
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
    }
  }
  render() {
    return (
      <div>
        <TextEditorComponent updateTextData= {this.onUpdateTextData.bind(this)}/>
        <DisplayComponent data = {this.state}/>
      </div>
    );
  }
}

export default App;
