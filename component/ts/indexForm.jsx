import  React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import  style from '../styles/style.scss';
import  ReactDOM from 'react-dom';
import jsplumb from 'jsplumb';

var xPos;
var yPos;
var elementID;
var startObj = [];
var connectionObj = [];
var count = 0;

function shape(props) {
    const {ctx, x, y, width, height, name} = props;

    switch(name){
    case "circle" :
                    ctx.beginPath();
                    ctx.arc(x , y , 50, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.fillStyle = "#996633";
                    ctx.fill();
                    ctx.className = "dragCircle";
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
      flag : true,
      itemArray: [],
      arrowShow : true
    }

  }






hideParent(){
  this.setState({flag : !this.state.flag});
}


createElement(id){
  elementID = `${id}drag`;
   const item = this.state.itemArray;
    var style = {
      color: 'red',
      fontSize: 200
    };


     item.push(
       <div className={elementID} style={style}>
       <h6>{id}</h6>
       </div>
     )
     this.setState({itemArray: item})
}

updateCanvas(id){

  let ID = id.slice(0, 8);

  elementID = `${ID}drag`;

   const item = this.state.itemArray;

   if (xPos < 10 || yPos < 150  || xPos > 1180 || yPos > 574){

        alert("Out of canvas");
        return

   }
    var style = {
      color: 'white',
      top : yPos,
      left : xPos
    };


     item.push(
       <div className={elementID} style={style}>
       {ID}
       </div>
     )
     this.setState({itemArray: item})
}



componentDidMount(){

document.getElementsByClassName('element1')[0].addEventListener('mouseup', (e)=>{this.updateCanvas(e.target.className)});
document.getElementsByClassName('element2')[0].addEventListener('mouseup', (e)=>{this.updateCanvas(e.target.className)});
document.getElementsByClassName('element3')[0].addEventListener('mouseup', (e)=>{this.updateCanvas(e.target.className)});
document.getElementsByClassName('element4')[0].addEventListener('mouseup', (e)=>{this.updateCanvas(e.target.className)});


$( "#start" ).draggable();
$( "#end" ).draggable();


$('.element1').draggable(
    {
        drag: function(){
            var offset = $(this).offset();
             xPos = offset.left;
             yPos = offset.top;
        },

        revert: function(event) {
          return !event
          }
    });

$('.element2').draggable(
    {
        drag: function(){
            var offset = $(this).offset();
             xPos = offset.left;
             yPos = offset.top;
        },

        revert: function(event) {
          return !event
          }
    });
$('.element3').draggable(
    {
        drag: function(){
            var offset = $(this).offset();
             xPos = offset.left;
             yPos = offset.top;

        },

        revert: function(event) {
          return !event
          }
    });
$('.element4').draggable(
    {
        drag: function(){
            var offset = $(this).offset();
             xPos = offset.left;
             yPos = offset.top;
        },

        revert: function(event) {
          return !event
          }
    });



}



componentDidUpdate(){

  var originX = 0;
  var originY = 0;

  var errorFlag = false;


              jsPlumb.draggable("start");
              jsPlumb.draggable("end");

            jsPlumb.draggable($(".element1drag"), {
            drag: function(event) {

            },
            stop: function(event, ui) {

                let X = event.pos[0];
                let Y = event.pos[1];


                if (X < 10 || Y < 150  ||X > 1180 || Y > 574){
                  alert("out of canvas");

                  var element = document.getElementsByClassName("element1drag")[0];

               /* element.style.top = "160px";
                  element.style.top = "160px";
                */

                }

            }
            });

            jsPlumb.draggable($(".element2drag"), {
            drag: function() {

            },
            stop: function(event, ui) {


                let X = event.pos[0];
                let Y = event.pos[1];

                if (X < 10 || Y < 150  ||X > 1180 || Y > 574){
                  alert("out of canvas");

                }

            }
            });



            jsPlumb.draggable($(".element3drag"), {
            drag: function() {

                let X = event.pos[0];
                let Y = event.pos[1];


                if (X < 10 || Y < 150  ||X > 1180 || Y > 574){
                  alert("out of canvas");

                }


            },
            stop: function(event, ui) {


                let X = event.pos[0];
                let Y = event.pos[1];


                if (X < 10 || Y < 150  ||X > 1180 || Y > 574){
                  alert("out of canvas");

                }

            }
            });


            jsPlumb.draggable($(".element4drag"), {
            drag: function() {

            },
            stop: function(event, ui) {

                let X = event.pos[0];
                let Y = event.pos[1];


                if (X < 10 || Y < 150  ||X > 1180 || Y > 574){
                  alert("out of canvas");

                }

            }
            });


            var common = {
              isSource:true,
              isTarget:true,
              connector: ["Straight"],
              connectorOverlays:[
                  [ "Arrow", { width:10, length:30, location:1, id:"arrow" } ],
                  [ "Label", { label:"", id:"label" } ]
                ]
            };

            jsPlumb.addEndpoint($(".element1drag"), {
              anchors:["Right"]
            }, common);

            jsPlumb.addEndpoint($(".element2drag"), {
              anchors:["Right"]
            }, common);

            jsPlumb.addEndpoint($(".element3drag"), {
              anchors:["Right"]
            }, common);

            jsPlumb.addEndpoint($(".element4drag"), {
              anchors:["Right"]
            }, common);

            jsPlumb.addEndpoint($(".element1drag"), {
              anchors:["Left"]
            }, common);

            jsPlumb.addEndpoint($(".element2drag"), {
              anchors:["Left"]
            }, common);

            jsPlumb.addEndpoint($(".element3drag"), {
              anchors:["Left"]
            }, common);

            jsPlumb.addEndpoint($(".element4drag"), {
              anchors:["Left"]
            }, common);

            jsPlumb.addEndpoint($("#start"), {
              anchors:["Right"]
            }, common);



            jsPlumb.addEndpoint($("#end"), {
              anchors:["Left"]
            }, common);

}

componentWillUpdate(){
  var errorFlag = false;
  jsPlumb.bind("connection", function(info) {
      console.log("Source id : " + info.sourceId);
      console.log("Target id : " + info.targetId);



      if (info.targetId === "start"){
         jsPlumb.detach(info.connection);
         errorFlag = true;
      }
      else if (info.sourceId === "end"){
         jsPlumb.detach(info.connection);
          errorFlag = true;
      }
      else if(info.sourceId === info.targetId){

        jsPlumb.detach(info.connection);
         errorFlag = true;
      }
      else if (info.sourceId === "start" && info.targetId === "end"){
        jsPlumb.detach(info.connection);
         errorFlag = true;
      }

      connectionObj.map((item, Index)=>{

          if( (item.start === info.targetId)  && (item.end === info.sourceId)){
              jsPlumb.detach(info.connection);
              errorFlag = true;

          }
      })


        connectionObj.map((item, index)=>{
          console.log("source element");
          if(info.targetId === item.start){
            console.log("match found");
            var nextElement = [];

            nextElement.push(info.targetId);
                for(var index = 0; index < startObj.length;index++ ){
                  if (Object.keys(startObj[index]) == nextElement[0]){
                    nextElement = Object.values(startObj[index]);
                    if(nextElement[0] == info.sourceId){
                      console.log("loop detected");
                      jsPlumb.detach(info.connection);
                       errorFlag = true;
                      break;
                    }
                    index = -1;
                  }
              }

          }
        } )

        if(!errorFlag){

          if(!connectionObj.length){
            connectionObj.push({start : info.sourceId, end : info.targetId});

            startObj.push({[info.sourceId]: info.targetId});
          }

          else if(connectionObj[connectionObj.length - 1].start !== info.sourceId && connectionObj[connectionObj.length - 1].end !== info.targetId){
            connectionObj.push({start : info.sourceId, end : info.targetId});

            startObj.push({[info.sourceId]: info.targetId});
          }



          }
      console.log("Connection object");
      console.log(connectionObj);
      console.log("start object");
      console.log(startObj);
  });

}

render() {

     return (<div /*onClick={(e)=>{
      if(e.target.className === "element1" || e.target.className === "element2" || e.target.className === "element3" || e.target.className === "element4"){
        this.createElement(e.target.className);
      }

     }} */>
         <canvas ref="canvas" id="canvas" className="canvas" width={1292} height={520}/>
         <div className="box">

         <div className={this.state.flag?"parent":"hideParent"}>


         <div className="element1">
            Element 1
         </div>

         <div  className="element2">
            Element 2
         </div>

         <div  className="element3" >
            Element 3
         </div>

         <div  className="element4" >
            Element 4
         </div>

        <div className={this.state.flag?"child":"hideChild"} onClick={() => {this.hideParent()}}>
          {this.state.flag?"HIDE>":"<SHOW"}
        </div>

        </div>
        </div>

             <div>
             {this.state.itemArray.map((item, index) => {
               return <div  key={index}>{item}</div>
             })}
             </div>

        <div id="start">
            Start
        </div>

        <div id="end">
            End
        </div>

        {this.state.arrowShow?
        <div id="direction">
          <p id="text" >Drag and drop elements from box to canvas</p>
          <img id="directionImg" src="https://forums.macrumors.com/attachments/art_arrow_brush-png.202296/" alt="direction" />
        </div>
        :
        <div></div>
      }

         </div>
     );
}
}
export default IndexForm;
