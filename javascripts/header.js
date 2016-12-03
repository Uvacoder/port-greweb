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
  function mix (x, y, a) { return x*(1-a) + y*a; }

  var width = 1000;
  var height = 90;
  var W = 100;
  var H = 9;
  var DIST1 = 100 * 100;
  var DIST2;
  var OPACITY_TRANSITION_TIME = 10000;

  var circle = false;
  var w, h;
  var start = +new Date();
  var t;
  function update() {
    t = (+new Date()-start);
    w = width/W;
    h = height/H;
    DIST2 = 80 + 60 * Math.sin( (+new Date() - start) / 500 );
    DIST2 *= DIST2;
    circle = (mousey||1000) > height;
  }

  var seed = Math.random();
  console.log("header seed="+seed);

  function getRadiusFor (x, y) {
    var ax = (x+.5)*w;
    var ay = (y+.5)*h;
    var intensityPhase = (1+Math.cos(t/(1000+200*seed)))/2;
    var freqPhase = (1+Math.sin(t/(9876-1000*seed)))/2;
    var speedPhase = (1+Math.cos(seed+t/2432+2000*seed))/2;
    var intensity = 2+2*smoothstep(0, W, x)*intensityPhase;
    var freq = 1/5 + (0.2*seed)*freqPhase;
    var speed = -0.01*(0.8+0.5*seed+0.5*speedPhase);
    var mouse = smoothstep(0, 1, 1- ellipse(ax-(mousex || W/2), ay-Math.min(height*1.2, mousey || height/2), 1, 1)/DIST1);
    var curve1 = smoothstep(0.5, 1, 1-2*Math.abs(smoothstep(0, H, y+(0.5+intensity*Math.cos(x*freq+t*speed)))-0.5));
    var undertext = Math.max(0, Math.min(1, 1-ellipse(ax-130, ay-50, 1, 3)/DIST2));
    var noisePhase = smoothstep(-1, 1, Math.sin(t/(2647+1000*seed)));
    var noise = Math.random();
    return w * Math.max(0, 0.1 + 0.2*mouse + -0.6*undertext + 0.4*mix(curve1, noise, noisePhase));
  }

  function getColor (bg) {
    var h = 200+seed*55*Math.cos(t/(4678+2000*seed)), 
        s = Math.floor(50+20*seed), 
        l = Math.floor((bg ? 40 : 50)*(1+0.5*(seed-0.5)));
    h = Math.floor(constraint(0, 255, h));
    if (t>OPACITY_TRANSITION_TIME && !bg && t%5000 < 1000)
      l += 10*smoothstep(0, 100, t%100);
    return 'hsl('+h+','+s+'%,'+l+'%)';
  }

  function render () {
    if (!(window.scrollY < 140)) return;
    if (t < OPACITY_TRANSITION_TIME) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    ctx.globalAlpha = smoothstep(0, OPACITY_TRANSITION_TIME, t);
    ctx.fillStyle = getColor(true);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = getColor(false);
    for (var x = 0; x < W; ++x) {
      for (var y = 0; y < H; ++y) {
        var radius = getRadiusFor(x, y);
        if (circle) {
          ctx.beginPath();
          ctx.arc((x+.5)*w, (y+.5)*h, radius, 0, Math.PI*2);
          ctx.fill();
        }
        else {
          var r = (radius * 0.78); // ~ Math.PI/4
          ctx.fillRect((x+.5)*w-r, (y+.5)*h-r, 2*r, 2*r);
        }
      }
    }
  }

  requestAnimFrame(function loop () {
    requestAnimFrame(loop);
    update();
    render();
  }, canvas);

}());
  
