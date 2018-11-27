import React from 'react';

class CanvasComponent extends React.Component {
    render() {
        return(
            <div>
               <canvas id="renderedCanvas" ref="canvas" width={800} height={800}/> 
            </div>
        );
    }
}

export default  CanvasComponent;