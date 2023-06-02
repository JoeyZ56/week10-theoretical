//Possible job test for being hired!

//creating a spiral matrex of [Arrays]

//function defining the varibales of the loops
function matrix(n) {
    const result = []
    let counter = 1
    let startRow = 0
    let endRow = n - 1
    let startCol = 0
    let endCol = n - 1

    //basic for loop
    for (let i = 0; i < n; i++) {
        result.push([])
    }

    while (startRow <= endRow && startCol <= endCol) {
        //top

        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter
            counter++
        }
        startRow++
        //right

        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter
            counter++
        }
        endCol--

        //bottom

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter
            counter++
        }
        endRow--
        //left

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter
            counter++
        }
        startCol++
    }
    return result
}

//can change the "4" to other numbers to increase the size of the spiral
console.log(matrix(4))


//Credit given to "Code Money" https://www.youtube.com/watch?v=Ftfs1IglS-w