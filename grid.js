function blankGrid() {
    return [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
}


function drawGrid(){
    let width = 100;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            strokeWeight(8); //grid line thickness
            stroke(138,123,110); //grid line color
            let val = grid[i][j];
            let s = val.toString();

            //if there's an empty space in the grid
            if(val !==0){
                fill(colorsAndSizes[s].color)
                rect(i*width, j*width, width, width,10)
                textAlign(CENTER, CENTER);
                noStroke();
                fill(colorsAndSizes[s].fontColor);
                textSize(colorsAndSizes[s].size);
                text(val,i*width+width/2,j*width+width/2);
              //default color of a space in grid
            } else {
                fill(187,173,160);
                rect(i*width, j*width, width, width,10)
            }
        }
    }
}

function copyGrid(grid){
    let extra = blankGrid();
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            extra[i][j] = grid[i][j];
        }
    }
    return extra;
}

function addNumber(){
    let options = [];
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if (grid[i][j]===0){ //if there's a valid spot
                options.push({
                    x:i,
                    y:j
                });
            }
        }
    }
    if (options.length > 0){
        let spot = random(options);
        let r = random(1);
        grid[spot.x][spot.y] = r > 0.5? 2:4;
    }
}

function compare(a,b){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if (a[i][j] !== b[i][j]){
                return true;
            }
        }
    }
    return false;
}

function flipGrid(grid){
    for(let i=0;i<4;i++){
        grid[i].reverse();
    }
    return grid;
}

function rotateGrid(grid){
    let newGrid = blankGrid();
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            newGrid[i][j] = grid[j][i];
        }
    }
    return newGrid;
}
