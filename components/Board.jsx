import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Slot from './Slot'; // Assuming Slot is another React Native component

const Board = () => {
  const [board, setBoard] = useState([
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '']
  ]);

  const [currPlayer, setCurrPlayer] = useState('X');
  const [oppPlayer, setOppPlayer] = useState('O');
  const [gameOver, setGameOver] = useState(false);

    const checkWin = (row, column, ch) => {
        // EXERCISE: This function does not cover all possible winning combinations. Edit the code to cover all possibilities. A working solution in C# (don't worry--if you know JavaScript you should understand most of it) exists at https://dotnetfiddle.net/FZGpbS Line #128
        try {
            if (board[row + 1][column] === ch) {
                if (board[row + 2][column] === ch) {
                    if (board[row + 3][column] === ch) {
                        return true;
                    }
                }
            }
        } catch (e) { console.log(e) }

        try {
            if (board[row + 1][column + 1] === ch) {
                if (board[row + 2][column + 2] === ch) {
                    if (board[row + 3][column + 3] === ch) {
                        return true;
                    }
                }
            }
        } catch (e) { console.log(e) }

        try {
            if (board[row + 1][column - 1] === ch) {
                if (board[row + 2][column - 2] === ch) {
                    if (board[row + 3][column - 3] === ch) {
                        return true;
                    }
                }
            }
        } catch (e) { console.log(e) }

        try {
            if (board[row][column + 1] === ch) {
                if (board[row][column + 2] === ch) {
                    if (board[row][column + 3] === ch) {
                        return true;
                    }
                }
            }
        } catch (e) { console.log(e) }

        try {
            if (board[row][column - 1] === ch) {
                if (board[row][column - 2] === ch) {
                    if (board[row][column - 3] === ch) {
                        return true;
                    }
                }
            }
        } catch (e) { console.log(e) }

        try {
            if (board[row - 1][column - 1] === ch) {
                if (board[row - 2][column - 2] === ch) {
                    if (board[row - 3][column - 3] === ch) {
                        return true;
                    }
                }
            }
        } catch (e) { console.log(e) }

        try {
            if (board[row - 1][column + 1] === ch) {
                if (board[row - 2][column + 2] === ch) {
                    if (board[row - 3][column + 3] === ch) {
                        return true;
                    }
                }
            }
        } catch (e) { console.log(e) }
    };	

  const updateBoard = (row, column, ch) => {
    setBoard((prev) => {
      const boardCopy = [...prev];
      boardCopy[row][column] = ch;
      return boardCopy;
    });
    return checkWin(row, column, ch);
  };

  const handleClick = (row, column) => {
    let newRow = row;
    if (row < board.length - 1 && board[newRow][column] === '') {
        newRow += 1;
    }
  
    setGameOver(updateBoard(newRow, column, currPlayer));
  
    if (!gameOver) {
      const currPlayerCopy = currPlayer;
      setCurrPlayer(oppPlayer);
      setOppPlayer(currPlayerCopy);
    }
  };
  

  return (
    <>
      {gameOver && (
        <Text>
          Game Over! {oppPlayer === 'X' ? 'Red' : 'Black'} Wins!
        </Text>
      )}
      <Text style={styles.playerDisplay}>
        {currPlayer === 'X' ? 'Red' : 'Black'} Move
      </Text>
      <View style={styles.board}>
        {board.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((ch, j) => (
              <TouchableOpacity
                key={j}
                style={styles.cell}
                onPress={() => handleClick(i, j)}
                disabled={!!ch || gameOver}
              >
                <Text>{ch}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </>
  );
};

const styles = {
  playerDisplay: {
    // Your styles for player display
  },
  board: {
    // Your styles for the board container
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 50,
    height: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
};

export default Board;
