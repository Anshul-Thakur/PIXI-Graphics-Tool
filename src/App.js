import React, { Component } from 'react';
import './App.css';
import TextEditorComponent from './Components/TextEditorComponent';
import DisplayComponent from './Components/DisplayComponent';
import * as PIXI from 'pixi.js';
import TableComponent from './Components/TableComponent';
import axious from "axios";

class App extends Component {
 
  onUpdateTextData(textData) {
    textData.textStyle = this.cloneObject(this.textStyle);

    this.setState(textData);
  }

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      load: false,
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

    this.textStyle = this.cloneObject(this.state.textStyle);
    this.defaultTextStyle = this.cloneObject(this.state.textStyle);
  }

  componentWillMount() {
    var me = this;

    axious.get('./config/TextPropsConfig.json').then(function (response) {
      me.componentData = response.data;
      me.setState({
        load: true
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  cloneObject = (obj) => {
    var dummyObj= {};
    
    Object.keys(this.state.textStyle).forEach((key)=>{dummyObj[key]=obj[key]});

    return dummyObj;
  }

  onUserInput = (e, textProperty) => {
      var value = e.target.value.trim();

      if(value === 'true') {
        value  = true;
      } else if(value === 'false') {
        value = false
      } else if(value==="0"){
        value = 0;
      } else {
        value  = (+value && typeof value === 'Number') || value;
      }

      if(typeof value === 'string' && value.indexOf(",")>-1) {
          value = value.split(",");
      }
      this.textStyle[textProperty] = value;
  }

  getChangedProps=(e)=>{
    var changedPropsObj = {};

    var changedPropsObj = Object.keys(this.defaultTextStyle).reduce((accumulator, key)=> {
      if(this.state.textStyle[key]!==this.defaultTextStyle[key]) {
        accumulator[key] = this.state.textStyle[key];
      }
      return accumulator;
    },{});

    console.log(changedPropsObj);
  }
  getAppComponents() {
    if(this.state.load) {
        return <div className="App">
                <button onClick= {this.getChangedProps}>JSON </button>
                <TextEditorComponent updateTextData= {this.onUpdateTextData.bind(this)}/>
                <TableComponent onChange = {this.onUserInput.bind(this)} data = {this.componentData}></TableComponent>
                <DisplayComponent data = {this.state}/>
              </div>
    } else {
      return <div>Loading...</div>
    }
  }
  render() {
    return (
        <div>
          {this.getAppComponents()}
        </div>
        
    );
    
    
  }
}

export default App;
