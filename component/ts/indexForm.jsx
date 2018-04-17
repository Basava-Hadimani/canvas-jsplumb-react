import  React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import  '../styles/style.scss';

var xPos;
var yPos;

function shape(props) {
    const {ctx, x, y, width, height, name} = props;

    switch(name){
    case "circle" :
                    ctx.beginPath();
                    ctx.arc(x , y , 50, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.fillStyle = "#996633";
                    ctx.fill();
                    break;
    case "rectangle":
                      ctx.fillRect(x, y , width + 100, height);
                      ctx.fillStyle="#996633";
                      break;

    case "triangle" :

                      ctx.beginPath();
                      ctx.moveTo(x, y);
                      ctx.lineTo(x + 200, y + 100);
                      ctx.lineTo(x, y + 100);
                      ctx.lineTo(x, y);
                      ctx.stroke();
                      ctx.fillStyle = "#996633";
                      ctx.fill();
                      break;
    case "square" :
                      ctx.fillRect(x , y , width , height);
                      ctx.fillStyle="#996633";
                      break;

    }
}

class IndexForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      flag : true
    }

  }



componentDidMount(){

document.getElementById('circle').addEventListener('mouseup', (e)=>{this.updateCanvas(e)});
document.getElementById('triangle').addEventListener('mouseup', (e)=>{this.updateCanvas(e)});
document.getElementById('square').addEventListener('mouseup', (e)=>{this.updateCanvas(e)});
document.getElementById('rectangle').addEventListener('mouseup', (e)=>{this.updateCanvas(e)});


$('#circle').draggable(
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

$('#triangle').draggable(
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
$('#square').draggable(
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
$('#rectangle').draggable(
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


updateCanvas(e) {

    const ctx = this.refs.canvas.getContext('2d');

    if(yPos < 150 || yPos > 650){
      alert("Please drag within the canvas");
    }else{
      shape({ctx, x: xPos, y: yPos - 150, width: 100, height: 100, name : e.target.id});
    }
  

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
         <div id="circle"  className="ui-widget-header" >
            circle
         </div>
         <div  id="triangle" className="ui-widget-header">
            triangle
         </div>
         <div  id="square" className="ui-widget-header">
            square
         </div>
         <div  id="rectangle" className="ui-widget-header">
            rectangle
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
