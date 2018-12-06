import React from 'react';

class ColorPickerComponent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state={
            selectedColors: this.props.defaultValue
        }; 
    }

    onChange = (e) => {
        var color = e.target.value,
            selectedColorArr = this.state.selectedColors;
            selectedColorArr.push(color);

        this.setState({
            selectedColors: selectedColorArr
        });

        this.props.onChange(this.state.selectedColors, this.props.textProp);
    }

    getColors =() => {
        return this.state.selectedColors.map((color)=> {
            return <span className= "selected-color">{color}</span>
        })
    }

    onColorContainerClick=(e)=> {
        var selectedColor = e.target.innerText.trim(),
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
            
            this.props.onChange(newSelectedColorsArray, this.props.textProp);
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

