
//Function to return biggest number of two
function biggerNumber(a, b) {
    let biggestNumber;
    if (a > b) {
        biggestNumber = a
        return biggestNumber;
    } else {
        biggestNumber = b
        return biggestNumber;
    }
}

//function biggerNumber test in console

console.log('Function returns biggest number of two: ', biggerNumber(50, 9));

//Function to calculate number of individual squares in n * n grid

function numberSquares(n) {
    let squares;
    if (n === 0) {
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

//function numberSquares test in console

console.log('Function returns number of individual squares: ', numberSquares(4));
