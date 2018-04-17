import  React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import  '../styles/style.scss';

var xPos;
var yPos;

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillStyle="#FF0000";
  //  ctx.fillText(name,70,40)
    ctx.fillRect(x, y, width, height);
}

class IndexForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      flag : true
    }
  }



componentDidMount(){


$('#Element1').draggable(
    {
        drag: function(){
            var offset = $(this).offset();
             xPos = offset.left;
             yPos = offset.top;
            console.log("X : " + xPos+"Y : "+yPos)
        },

        revert: function(event) {
          return !event
          }
    });
}

updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');

    rect({ctx, x: 50, y: 50, width: 100, height: 100});

}


hideParent(){
  this.setState({flag : !this.state.flag});
}


render() {
console.log(this.state);
     return (<div>
         <canvas ref="canvas" className="canvas" width={1292} height={520}/>
         <div className="box">
         <div className={this.state.flag?"parent":"hideParent"}>
         <div id="Element1" draggable='true' className="ui-widget-header" >
            Element 1
         </div>
         <div  id="Element2" className="ui-widget-header">
            Element 2
         </div>
         <div  id="Element3" className="ui-widget-header">
            Element 3
         </div>
         <div  id="Element4" className="ui-widget-header">
            Element 4
         </div>
              <div className={this.state.flag?"child":"hideChild"} onClick={() => {this.hideParent()}}>
          {this.state.flag?"HIDE>":"<SHOW"}
        </div>
        </div>
        </div>
         </div>
     );
}
}
export default IndexForm;
