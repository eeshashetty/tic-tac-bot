const { checkscore } = require('./patterns')


function gameOver(board) {
    for (let i in board) {
        if (board[i] === "") { return false }
    }
    return true
}

function minimax(board, depth, maxMode, max_depth) {
    let value = checkscore(board)

    if (value === 10 || value === -10) {
        return value
    }

    if (gameOver(board) === true) {
        return 0
    }

    if(depth > max_depth) {
        return 0
    }

    if (maxMode) {
        let bestVal = -Infinity
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                board[i] = "O"
                value = minimax(board, depth + 1, false, max_depth)
                bestVal = Math.max(bestVal, value)
                board[i] = ""
            }
        }

        return bestVal
    }

    else {
        let bestVal = Infinity
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                board[i] = "X"
                value = minimax(board, depth + 1, true, max_depth)
                bestVal = Math.min(bestVal, value)
                board[i] = ""
            }
        }

        return bestVal
    }
}

function bestMove(board, max_depth=Infinity) {
    let bestVal = -Infinity
    let bestMove = -1
    let moveVal = -Infinity

    for (let i = 0; i < board.length; i++) {

        if (board[i] !== "") { continue }

        board[i] = "O"
        moveVal = minimax(board, 0, false, max_depth)
        board[i] = ""
        if (moveVal > bestVal) {
            bestVal = moveVal
            bestMove = i
        }


    }

    console.log(`Best Move is to Position ${bestMove}`)
    console.log(`Value =  ${bestVal}`)

    return bestMove
}

// bestMove(["O", "", "", "", "X", "O", "X", "", ""])

module.exports = bestMove