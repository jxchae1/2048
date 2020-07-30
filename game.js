
function startNewGame(){
    location.reload();
}


//creates one array with non-zero values and one array with only zero values
//concatenates both arrays to make one array (a complete row)
function slide(row){
    let arr = row.filter(val=>val);
    let missing = 4 - arr.length;
    let zeros = Array(missing).fill(0);
    arr = zeros.concat(arr);
    return arr;
}

//executed if two values in a row that are next to each other can be combined
function combine(row){
    for(let i=3; i>=1; i--){
        let a = row[i];
        let b = row[i-1];
        if (a===b){
            row[i] = a+b;
            score += row[i];
            row[i-1] = 0;
        }
    }
    return row;
}

function operate(row){
    row = slide(row);
    row = combine(row);
    row = slide(row);
    return row;
}

function isGameWon(){
    for(let i=0;i<4;i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 2048) {
                return true;
            }
        }
    }
    return false;
}

//checks every spot if it's not a zero, and if the right of the value and below the value are not the same
function isGameOver() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                return false;
            }
            if (i !== 3 && grid[i][j] === grid[i + 1][j]) {
                return false;
            }
            if (j !== 3 && grid[i][j] === grid[i][j + 1]) {
                return false;
            }
        }
    }
    return true;
}
