function docolor() {
    var dd1 = document.getElementById("d1");
    var colorinput = document.getElementById("color");
    var color = colorinput.value;
    dd1.style.backgroundColor = color;
  }
  
  function dosquare() {
    var dd1 = document.getElementById("d1");
    var sizeinput = document.getElementById("slider");
    var size = sizeinput.value;
    var context = dd1.getContext("2d")
    context.clearRect(0,0,dd1.width,dd1.height);
    context.fillStyle = "yellow";
    context.fillRect(10,10,size,size);
  }

  function btnMsg() {
    let text = "Thank you!";
    if (confirm(text) == true) {
      text = "Seriously. Thank you for clicking me!"
    } else {
      text = "It doesn't matter which one you click! I appreceate you!"
    }
    document.getElementById("demo").innerHTML = text;
  }