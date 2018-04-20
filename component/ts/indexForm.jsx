import  React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import  style from '../styles/style.scss';
import  ReactDOM from 'react-dom';
import jsplumb from 'jsplumb';

var xPos;
var yPos;
var elementID;

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

console.log(elementID)
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
            console.log("X : " + xPos+"Y : "+yPos)
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
            console.log("X : " + xPos+"Y : "+yPos)
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
            console.log("X : " + xPos+"Y : "+yPos)
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
            console.log("X : " + xPos+"Y : "+yPos)
        },

        revert: function(event) {
          return !event
          }
    });


}



componentDidUpdate(){

  var originX = 0;
  var originY = 0;
  
    

              jsPlumb.draggable("start");
              jsPlumb.draggable("end");

            jsPlumb.draggable($(".element1drag"), {
            drag: function(event) {
    
            },
            stop: function(event, ui) {

                let X = event.pos[0];
                let Y = event.pos[1];

                console.log(X + "   " + Y);

                if (X < 10 || Y < 150  ||X > 1180 || Y > 574){
                  alert("out of canvas");

                  var element = document.getElementsByClassName("element1drag")[0];

               /* element.style.top = "160px";
                  element.style.top = "160px";
                */



                  console.log(element.style.top);
                }

            }
            });

            jsPlumb.draggable($(".element2drag"), {
            drag: function() {
 
            },
            stop: function(event, ui) {


                let X = event.pos[0];
                let Y = event.pos[1];

                console.log(X + "   " + Y);

                if (X < 10 || Y < 150  ||X > 1180 || Y > 574){
                  alert("out of canvas");

                  console.log(X + "   " + Y);
                }

            }
            });



            jsPlumb.draggable($(".element3drag"), {
            drag: function() {

                let X = event.pos[0];
                let Y = event.pos[1];

                console.log(X + "   " + Y);

                if (X < 10 || Y < 150  ||X > 1180 || Y > 574){
                  alert("out of canvas");

                  console.log(X + "   " + Y);
                }

 
            },
            stop: function(event, ui) {


                let X = event.pos[0];
                let Y = event.pos[1];

                console.log(X + "   " + Y);

                if (X < 10 || Y < 150  ||X > 1180 || Y > 574){
                  alert("out of canvas");

                  console.log(X + "   " + Y);
                }

            }
            });


            jsPlumb.draggable($(".element4drag"), {
            drag: function() {

            },
            stop: function(event, ui) {

                let X = event.pos[0];
                let Y = event.pos[1];

                console.log(X + "   " + Y);

                if (X < 10 || Y < 150  ||X > 1180 || Y > 574){
                  alert("out of canvas");

                  console.log(X + "   " + Y);
                }

            }
            });


           /* jsPlumb.connect({
              source:$("#element1drag"), 
              target:$("#element2drag"),
              anchors:["Right", "Left" ],
              endpoint:"Rectangle",
              endpointStyle:{ fill: "yellow" }
            });
            
          
            var common = {
              anchors:[ "BottomCenter", "TopCenter" ],
              endpoints:["Dot", "Blank" ]
            };

            jsPlumb.connect({ source:$("#element2drag"), target:$("#element1drag") }, common);

            jsPlumb.connect({ source:$("#element3drag"), target:$("#element4drag") }, common);

           

            var exampleGreyEndpointOptions = {
                endpoint:"Rectangle",
                paintStyle:{ width:25, height:21, fill:'#666' },
                isSource:true,
                connectorStyle : { stroke:"#666" },
                isTarget:true
              };


              jsPlumb.addEndpoint($("#element1drag"), { 
                anchor:"Bottom"
              }, exampleGreyEndpointOptions); 

              jsPlumb.addEndpoint($("#element2drag"), { 
                anchor:"Top" 
              }, exampleGreyEndpointOptions);

              var endpointOptions = { isTarget:true, endpoint:"Rectangle", paintStyle:{ fill:"gray" } };
              var endpoint = jsPlumb.addEndpoint($("#element3drag"), endpointOptions);
 */
            var common = {
              isSource:true,
              isTarget:true,
              connector: ["Straight"]
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

render() {
console.log(this.state);

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
          <img id="directionImg" src="http://www.onlinehobbyshop.nl/wp-content/uploads/2015/10/curved-arrow-left.png" alt="direction" />
        </div>
        :
        <div></div>
      }

         </div>
     );
}
}
export default IndexForm;