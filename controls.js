function keyPressed(){

    if (status !== 0) {
        return;
    }

    const boxW = 340;
    const boxL = 180;
    let flipped = false;
    let rotated = false;
    let played = true;
    if(keyCode === DOWN_ARROW){

    } else if (keyCode === UP_ARROW){
        grid = flipGrid(grid);
        flipped = true;
    } else if (keyCode === RIGHT_ARROW){
        grid = rotateGrid(grid);
        rotated = true;
    } else if (keyCode === LEFT_ARROW){
        grid = rotateGrid(grid);
        grid = flipGrid(grid);
        rotated = true;
        flipped = true;
    } else{
        played = false;
    }

    if(played){
        let past = copyGrid(grid);
        for(let i =0; i<4; i++){
            grid[i] = operate(grid[i]);
        }
        let changed = compare(past,grid);

        if(flipped){
            grid = flipGrid(grid);
        }

        if(rotated){
            grid = rotateGrid(grid);
        }

        if(changed){
            addNumber();
        }
        updateCanvas();

        let gameOver = isGameOver();
        if(gameOver){
            status = 1;
            console.log("Game Over");
            noStroke();
            fill(0);
            rect((w-boxW)/2,(l-boxL)/2,boxW,boxL);
            textSize(50);
            fill(255,255,255);
            text('Game Over',((w-boxW)/2)+170, ((l-boxL)/2)+80);

        }
        let gameWon = isGameWon();
        if(gameWon){
            status = 2;
            console.log("You reached 2048!");
            draw();
        }
    }

}
