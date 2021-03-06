# Background and Overview 
Comman is a sudoku solver. If you are not familiar with Sudoku, [wikipedia](https://en.wikipedia.org/wiki/Sudoku) describes it best. Sudoku is a logic-based, combinatorial number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 sub-grids that compose the grid contain all of the digits from 1 to 9. Comman will use animations which will animate the solving of a sudoku puzzle.

#### Credits to these repositories
* https://github.com/dachev/sudoku
* https://github.com/SamirHodzic/sudoku-solver-js
* https://github.com/momajd/sudoku-solver
* https://github.com/ossas/sudokumaker


# Functionality
Comman uses the common [backtracking algorithm](https://en.wikipedia.org/wiki/Sudoku_solving_algorithms), which is a type of brute force search. Backtracking is a depth-first search (in contrast to a breadth-first search), because it will completely explore one branch to a possible solution before moving to another branch.  

# MVP
With Comman, users will be able to:
* generate a sudoku board 
* Verifies the validity of a sudoku puzzle
* Implement solving animation
* View the number of iterations taken to solve a puzzle

# Bonus
* Instantly solve sudoku puzzle (skip animation)
* Create a custom board by simply inputing numbers


# Wireframes 
![](https://github.com/Solomon-T/comman/blob/master/wireframe.png)

# Architecture and Technology
* `JavaScript` for game logic and algorithm implementation.
* `webpack` for module bundling.
* `Html-5` for the webpage structure.
* `sweetAlert` for customizable alerts.
* `CSS` for styling.

## Implementation Timeline 
### Day1
* Implementing the backtracking algorithm in JS.
### Day 2
*  CLI testing for board generation
*  CLI testing on board  Solving
### Day 3
* HTML and CSS for the page 
* Front end animation
