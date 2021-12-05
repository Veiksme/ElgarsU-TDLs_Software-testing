//Function to return biggest number of two
function biggerNumber(a, b) {
    let biggestNumber;
    //Case for equal numbers
    if (a === b) {
        biggestNumber = 'The numbers entered are equal.';
        return biggestNumber;
    } else if (a > b) {
        biggestNumber = a
        return biggestNumber;
    } else {
        biggestNumber = b
        return biggestNumber;
    }
}

//Function to calculate number of individual squares in N by N grid
function numberSquares(n) {
    let squares;
    if (n === 0) {
        //Case for zero
        squares = 'You entered 0, square count is 0';
        return squares;
    } else {
        let squareItterator = 1;
        let squares = 0;
        do {
            squares = squares + squareItterator * squareItterator;
            squareItterator++;
        } while (squareItterator <= n);   
        return squares;
    }
}

module.exports = {
    biggerNumber: biggerNumber,
    numberSquares: numberSquares
}
