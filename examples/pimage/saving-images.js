function setup() {
  // frameRate(1);
  createGraphics(600, 600);
  background(200);

  var i = loadImage("unicorn.jpg", function(img){
    image(img, 10, 10);

    setTimeout(function(){
      console.log("Save image")
      img.save("png");
    }, 1000);
    
  });
}


