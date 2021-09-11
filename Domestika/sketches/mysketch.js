const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    
    const degtoRad = (deg) => {
      return (deg*Math.PI)/180; 
    }
    const cx = width*0.5;
    const cy = height*0.5;
    const w = width*0.01;
    const h = height*0.1;
    const num = 12*Math.random()*5;
    const radius = width*0.3;
    let x,y;
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    //start of drawing block first save the original state
    for (let i = 0; i < num; i++) {
      const slice = degtoRad(360/num);
      const angle = slice*i;
      x =  (cx + radius * Math.sin(angle)) + Math.random()*10;
      y =  (cy + radius * Math.cos(angle)) + Math.random()*10;

      context.save(); 
      context.translate(x, y); //translate x y coordinates
      context.rotate(-angle);
      context.fillStyle ='#'+(Math.floor(Math.random()*16777215).toString(16));
      context.fillRect(-w*0.5, -h*0.5, w*Math.random()*2, h*Math.random()*2);
      context.restore();      
    }
    for (let j = 0; j < 7; j++) {
      context.save();
      context.beginPath();
      context.lineWidth = 10*Math.random();
      context.strokeStyle ='#'+(Math.floor(Math.random()*16777215).toString(16));
      context.arc(cx,cy, Math.random()*width, Math.random(), 2 * Math.PI * Math.random()*2.5);
      context.stroke();
      context.restore(); 
    }

    // setTimeout(() => {  location.reload(); }, 500);

    
  };
};

canvasSketch(sketch, settings);
