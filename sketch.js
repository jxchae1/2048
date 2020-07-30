let grid;
let score = 0;
let status = 0;
const w = 400;
const l = 400;
let img;


function setup() {
    let canvas = createCanvas(w,l);
    canvas.position(440,130,"absolute");
    img = loadImage('crown.png');
    grid = blankGrid();
    addNumber();
    addNumber();
    updateCanvas();
    noLoop();
}


function updateCanvas() {
    background(255);
    drawGrid();
    select('#score').html(score);


}

function draw(){
    image(img,53,95,300,200);
}


