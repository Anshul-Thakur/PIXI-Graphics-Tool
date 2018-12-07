import React from 'react';

class ColorPickerComponent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state={
            selectedColors: this.props.data.propValue
        }; 
    }

    onChange = (e) => {
        var color = e.target.value,
            selectedColorArr = this.state.selectedColors;
            selectedColorArr.push(color);

        this.setState({
            selectedColors: selectedColorArr
        });

        this.props.onChange(this.state.selectedColors, this.props.data.propName);
    }

    getColors =() => {
        var cursorType = this.state.selectedColors.length > 1 ? "pointer" : "not-allowed";

        return this.state.selectedColors.map((color)=> {
            var selectedColorStyle = {
                background: color,
                cursor: cursorType
            };
            return <div key={color + "-selected-Color"} style={selectedColorStyle} id={color + "-selected-Color"} className= "selected-color"></div>
        })
    }

    onColorContainerClick=(e)=> {
        var selectedColorID = e.target.id.trim(),
            selectedColor = selectedColorID.split("-")[0],
            prevSelectedColorsArray = this.state.selectedColors,
            newSelectedColorsArray;

        if (prevSelectedColorsArray.length > 1 && prevSelectedColorsArray.indexOf(selectedColor) > -1) {
            newSelectedColorsArray = prevSelectedColorsArray.reduce((accumulator, color)=>{
                if (color !== selectedColor) {
                    accumulator.push(color);
                }
                return accumulator;
            }, []);

            this.setState({
                selectedColors : newSelectedColorsArray
            });
            
            this.props.onChange(newSelectedColorsArray, this.props.data.propName);
        }
    }
    
    render() {
        return(                  
            <div>
                <input type="color" name="head" onChange={this.onChange}></input>
                <div onClick = {this.onColorContainerClick}>
                    {this.getColors()}
                </div>
            </div>
        );
    }
}

export default  ColorPickerComponent;

