$(document).ready(
    require(
        ['zrender/zrender'],
        function(zrender) {
        var zr = zrender.init(document.getElementById('main'));
        });
    
    
    var Droplet=require(zrender/shape/Droplet);
    var probeImage=new Droplet({
        style:{
                x:730,
                y:275,
                a:30,
                b:30,
                color:'#DCDCDC',
                lineWidth:1,
                shadowColor:'#696969',
                shadowOffsetX:15,
                }
                                   
        });
        
    var Circle=require(zrender/shape/Circle);
    var bulletImage=new Circle({
        style:{
                r:3,
                color:'#FFFFFF',
                lineWidth:0,
                }
        });
                  
    var Rectangle=require(zrender/shape/Rectangle);
    var rockImage=new Rectangle({
        style:{
                width:30,
                height:30,
                color:'#FFA500',
                lineWidth:1,
                radius:3,
                shadowColor:'#696969',
                shadowOffsetX:15,
                }
                  
        });
     
    var Heart=require(zrender/shape/Heart);
    var heartImage=new Heart({
        style:{
                a:30,
                b:30,
                opacity:0.5,
                lineWidth:0,
                color:'#FF0000',
                }
        });
                  
    var Isogon=require(zrender/shape/Isogon);
    var enemyImage=new Isogon({
        style:{
                r:15,
                n:6,
                color:'#00FF00',
                lineWidth:1,
                shadowColor:'#696969',
                shadowOffsetX:15,
                }
        });
                  
    var gScore, gOver;
                  
    zr.addShape(probeImage);
    
    define(function(){
        
    })
                
    
                  
                  
                  
                  
                  
                  
                  
                  
                  })
                  
            
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
);

        
        