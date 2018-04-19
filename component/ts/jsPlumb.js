import jsPlumb from 'jsplumb';


export default function jsplumb (){

        jsPlumb.ready(function() {
            jsPlumb.setContainer("canvas");

          $("#element1drag").resizable({
        resize : function(event, ui) {            
                jsPlumb.repaint(ui.helper);
            },
            handles: "all"
        });


            
            var common = {
              isSource:true,
              isTarget:true,
              connector: ["Straight"]
            };
            
            jsPlumb.addEndpoint("item_left", { 
              anchors:["Right"]
            }, common); 
            
            jsPlumb.addEndpoint("item_right", { 
              anchor:"Left"
            }, common);

            jsPlumb.addEndpoint("item_right", { 
              anchor:"Right" 
            }, common);
            
            jsPlumb.addEndpoint("item_rightMost", { 
              anchor:"Right" 
            }, common);
            
            jsPlumb.draggable("item_left");
            jsPlumb.draggable("item_right");
            jsPlumb.draggable("item_rightMost");
            
        });

}