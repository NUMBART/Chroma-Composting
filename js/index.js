var fgImg = null;
var bgImg = null;
var fgcanvas;
var bgcanvas;
function fgLoad(){
  fgImg = new SimpleImage(document.getElementById("fgLoad"));
  fgcanvas = document.getElementById("fg");
  fgImg.drawTo(fgcanvas);
}
function bgLoad(){
  bgImg = new SimpleImage(document.getElementById("bgLoad"));
  bgcanvas = document.getElementById("bg");
  bgImg.drawTo(bgcanvas);
}
function createComposite(){
  var output = new SimpleImage(fgImg.getWidth(), fgImg.getHeight());
  for(var pixel of fgImg.values()){
    if((pixel.getRed() + pixel.getBlue() )> 1.2*pixel.getGreen())
      output.setPixel(pixel.getX(), pixel.getY(), pixel);
    else
      output.setPixel(pixel.getX(), pixel.getY(), bgImg.getPixel(pixel.getX(),pixel.getY()));
  }
  output.drawTo(fgcanvas);
}
function clear(){
  doclear(fgcanvas);
  doclear(bgcanvas);
}
function doclear(canvas){
  var context = canvas.getContext("2d");
  context.clearRect(0, 0,canvas.width, canvas.height);
}