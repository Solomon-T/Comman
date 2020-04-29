import Grid from "./scripts/grid";
import puzzleArrays from "./scripts/puzzles"



let canvas = document.getElementById('canvas-board');
let context = canvas.getContext('2d');
const myGrid = new Grid(context)
myGrid.render()

const puzzle = puzzleArrays[2]
myGrid.fill(puzzle)

function isValidSudoku(sudoku) {
    // debugger
    const rows = {
        0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []
    };
    const cols = {
        0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []
    };
    const SubGrid = {
        0:[], 1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[]
    };

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const currentValue = sudoku[i][j]
            if (currentValue !== 0){
                debugger
                // Cheking the rows
                if (rows[i].includes(currentValue)) {
                    return false
                }else{
                    rows[i].push(currentValue)
                }
                // Cheking the colums
                if (cols[j].includes(currentValue)) {
                    return false
                } else {
                    cols[j].push(currentValue)
                }
                // Cheking the subgrig some math will be involved
                // const k = 'bananas';
                const k = Math.floor((j) / 3) + Math.floor((i) / 3) * 3
                debugger
                if (SubGrid[k].includes(currentValue)) {
                    return false
                } else {
                    SubGrid[k].push(currentValue)
                }
                debugger
            }
        }   
    }
    return true
}

const validity = document.getElementById('validity');
validity.innerText = isValidSudoku(puzzle);
