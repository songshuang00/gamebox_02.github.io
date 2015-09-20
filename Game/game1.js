$(document).ready(function(){
    require(
        ['zrender/zrender'],
        function(zrender) {
        var zr = zrender.init(document.getElementById('main'));
        });
    
    
    var Droplet=require(zrender/shape/Droplet);
    var probeImage=new Droplet({
        style:{
                x:275,
                y:730,
                a:20,
                b:20,
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
                  
    var gScore=0, gHP=3;
                          
    $('#gcanvas').ready(function(){
        $(this).click(function(){$(this).fadeIn()});
        
        zr.addShape(new probeImage);
       
        $(this).keydown(function(e){
            switch (event.which){
                case 65:
                {
                  $(this.probeImage).animate({left:'1000px',},'slow');
                  if ($(this.probeImage.x)<=20)
                      {
                       $(this.probeImage).stop();
                      };
                };
                case 83:
                {
                  $(this.probeImage).animate({bottom:'1000px',},'slow');
                  if ($(this.probeImage.y)>=730)
                      {
                       $(this.probeImage).stop();
                      };
                };
                case 68:
                {
                  $(this.probeImage).animate({right:'1000px',},'slow');
                  if ($(this.probeImage.x)>=530)
                      {
                       $(this.probeImage).stop();
                      };
                };
                case 87:
                {
                  $(this.probeImage).animate({top:'1000px',},'slow');
                  if ($(this.probeImage.y)<=20)
                      {
                       $(this.probeImage).stop();
                      };
                };
                case 229:
                {
                 zr.addShape(new bulletImage({
                     style:{
                         x:this.probeImage.x,
                         y:this.probeImage.y-20,
                     }
                  }));
                  
                 $(this.bulletImage).animate({top:'1000px',},'fast');
                };
                default:
                    $(this.probeImage).stop();
            };
            
            $(this).define(function getRandom(n){
                return Math.floor(Math.random()*n+1)
                });
                       
            $(this).define(function addEnemy(){
                zr.addShape(new enemyImage({
                    style:{
                        x:getRandom(520),
                        y:30,
                    }
                }));
            });
        });
    });
            
            var setIntervalFun1=null;
            setIntervalFun1=setInterval('addEnemy()',1000*5);
            $(this.enemyImage).animate({bottom:'1000px',},'normal');
            $(this.enemyImage).animate({left:'1000px',},(getRandom(1)-getRandom(1))*50);
            if(setIntervalFun1 != null){
                clearInterval(setIntervalFun1);
            };
            
            function addHeart(){
                zr.addShape(new heartImage({
                    style:{
                        x:getRandom(520),
                        y:getRandom(720),
                    }
                }));
            };

            var setIntervalFun2=null;
            setIntervalFun2=setInterval('addEnemy()',1000*50);
            if(setIntervalFun2 != null){
                clearInterval(setIntervalFun2);
            };
                 
            var peDistance=Math.pow(this.probeImage.x-this.enemyImage.x,2)+Math.pow(this.probeImage.y-this.enemyImage.y,2);
            var beDistance=Math.pow(this.bulletImage.x-this.enemyImage.x,2)+Math.pow(this.bulletImage.y-this.enemyImage.y,2);
            var hpDistance=Math.pow(this.probeImage.x-this.heartImage.x,2)+Math.pow(this.probeImage.y-this.heartImage.y,2);
            
            if (peDistance<=2500){
                gHP=gHP-1;
            };
            
            if (beDistance<=9000){
                $(this.enemyImage).remove();
                $(this.bulletImage).remove();
                gScore=gScore+1;  
            };
                 
            if (hpDistance<=2500 && gHP<3){
                gHP=gHP+1;
                $(this.heartImage).remove();
            };
                
            if (hpDistance<=2500 && gHP==3){
                $(this.heartImage).remove();
            };
            
            $(this).define(function gameOver(){
                var myText=require(zrender/shape/Text);
                zr.addShape(new myText({
                    style:{
                        x:200,
                        y:300,
                        text:'Game Over. Score:'+gScore,
                    }
                }));
            });
                               
            if (gHP==0){
                $(this).stop();
                $(this).gameOver();
            };
});