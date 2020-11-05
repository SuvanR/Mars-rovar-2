canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["nasa img 1.jpg","nasa img 2.jpg","nasa img 3.jpg","nasa img 4.jpg"];
random_number = Math.floor(Math.random() * 4);

rover_width = 100;
rover_height = 100;
rover_x = 10;
rover_y = 10;
background_img = nasa_mars_images_array[random_number];
console.log("background_img ="+ background_img);
rover_img = "rover.png";

function add(){
    background_tag = new Image();
    background_tag.onload =uploadBackground;
    background_tag.src = background_img;

    rover_tag = new Image();
    rover_tag.onload = uploadrover;
    rover_tag.src = rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_tag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
ctx.drawImage(rover_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (keyPressed == '38'){
      up();
      console.log("up");
  }
  if (keyPressed == '40'){
      down();
      console.log("down");
  }
  if (keyPressed == '37'){
      left();
      console.log("left");
  }
  if (keyPressed == '39'){
      right();
      console.log("right");
  }
}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed,x ="+rover_x +"|y ="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("when up arrow is pressed,x ="+rover_x +"|y ="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("when up arrow is pressed,x ="+rover_x +"|y ="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("when up arrow is pressed,x ="+rover_x +"|y ="+rover_y);
        uploadBackground();
        uploadrover();
    }
}