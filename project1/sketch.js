let angle=0; let distMouse=50;
function setup(){
    createCanvas(400, 400);
    rectMode(CENTER);
    angleMode(DEGREES);
}
function draw(){
    background(220);
    let distance=dist(mouseX, mouseY, width/2, height/2);
    if(distance<distMouse){
    angle+=1;
    }
    translate(width/2, height/2);;
    rotate(angle);
    rect(0,0, 100, 50);

}