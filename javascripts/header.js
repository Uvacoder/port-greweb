(function(){

  var canvas = document.createElement("canvas");
  if(!canvas.getContext) return; // canvas is required.
  canvas.height = 100;
  canvas.width = 1000;
  canvas.className = "visualizer";
  var header = document.querySelector("body > header");
  header.appendChild(canvas);
  var ctx = canvas.getContext("2d");

  var requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  var mousex, mousey;
  
  function resize () {
    var r = header.getBoundingClientRect();
    if (canvas.width != r.width) canvas.width = r.width;
    if (canvas.height != r.height) canvas.height = r.height;
  }
  window.addEventListener("resize", function (e) {
    resize();
  });
  resize();


  window.addEventListener("mousemove", function (e) {
    var o = header.getBoundingClientRect();
    mousex = e.clientX + window.scrollX - o.left;
    mousey = e.clientY + window.scrollY - o.top;
  });

  function constraint (min, max, value) { return Math.max(min, Math.min(max, value)) }
  function smoothstep (min, max, value) {
    var x = Math.max(0, Math.min(1, (value-min)/(max-min)));
    return x*x*(3 - 2*x);
  }
  function ellipse (x, y, w, h) { return x*x*w + y*y*h; }

  var width = 1000;
  var height = 90;
  var W = 100;
  var H = 9;
  var DIST1 = 300 * 300;
  var DIST2;


  var w, h;
  var start = +new Date();
  var t;
  function update() {
    t = +new Date()-start;
    w = width/W;
    h = height/H;
    DIST2 = 80 + 60 * Math.sin( (+new Date() - start) / 500 );
    DIST2 *= DIST2;
  }

  function getRadiusFor (x, y) {
    var ax = (x+.5)*w;
    var ay = (y+.5)*h;
    var mouse = smoothstep(0, 1, 1- ellipse(ax-(mousex || W/2), ay-(mousey || H/2), 1, 1)/DIST1);
    var curve1 = smoothstep(0.5, 1, 1-2*Math.abs(smoothstep(0, H, y+(0.5+Math.cos(x/5+t/200)))-0.5));
    var undertext = Math.max(0, Math.min(1, 1-ellipse(ax-130, ay-50, 1, 3)/DIST2));
    return w * Math.max(0, 0.1 + 0.1*mouse + 0.4*curve1 + -0.2*undertext);
  }

  function getColor (bg) {
    var h = 200+20*Math.cos(t/1000), 
        s = 50, 
        l = bg ? 40 : 50;
    h = Math.floor(constraint(0, 255, h));
    if (!bg && t%5000 < 1000)
      l += 10*smoothstep(0, 100, t%100);
    return 'hsl('+h+','+s+'%,'+l+'%)';
  }
 
  function render () {
    if (!(window.scrollY < 140)) return;
    ctx.fillStyle = getColor(true);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = getColor(false);
    for (var x = 0; x < W; ++x) {
      for (var y = 0; y < H; ++y) {
        var radius = getRadiusFor(x, y);
        ctx.beginPath();
        ctx.arc((x+.5)*w, (y+.5)*h, radius, 0, Math.PI*2);
        ctx.fill();
      }
    }
  }

  requestAnimFrame(function loop () {
    requestAnimFrame(loop);
    update();
    render();
  }, canvas);

}());
  