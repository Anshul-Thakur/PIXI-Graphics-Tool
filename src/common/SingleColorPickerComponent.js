import React from 'react';

class SingleColorPickerComponent extends React.Component {
    render() {
        return(                  
            <div>
                <input type="color" name="single-color-picker" onChange={(e)=> {this.props.onChange(e.target.value, this.props.data.propName)}}></input>
            </div>
        );
    }
}

export default  SingleColorPickerComponent;

