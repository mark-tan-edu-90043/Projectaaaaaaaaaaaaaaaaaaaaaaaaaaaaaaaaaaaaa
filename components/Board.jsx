import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const ROWS = 6;
const COLS = 7;

const initialState = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

const Board = () => {
  const [board, setBoard] = useState(initialState);
  const [currentPlayer, setCurrentPlayer] = useState('Player 1');

  const handlePress = (col) => {
    const updatedBoard = [...board];

    for (let row = ROWS - 1; row >= 0; row--) {
      if (!updatedBoard[row][col]) {
        updatedBoard[row][col] = currentPlayer;

        // Check for a win
        if (checkForWin(updatedBoard, row, col)) {
          alert(`${currentPlayer} wins!`);
          resetGame();
        } else {
          // Switch players
          setCurrentPlayer(currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1');
        }

        setBoard(updatedBoard);
        break;
      }
    }
  };

  const checkForWin = (board, row, col) => {
    // Check horizontally
    for (let i = 0; i < 4; i++) {
      if (
        board[row] &&
        board[row][col - i] === currentPlayer &&
        board[row][col - i + 1] === currentPlayer &&
        board[row][col - i + 2] === currentPlayer &&
        board[row][col - i + 3] === currentPlayer
      ) {
        return true;
      }
    }

    // Check vertically
    for (let i = 0; i < 4; i++) {
      if (
        board[row - i] &&
        board[row - i][col] === currentPlayer &&
        board[row - i + 1] === currentPlayer &&
        board[row - i + 2] === currentPlayer &&
        board[row - i + 3] === currentPlayer
      ) {
        return true;
      }
    }

    // Check diagonally (top-left to bottom-right)
    for (let i = 0; i < 4; i++) {
      if (
        board[row - i] &&
        board[row - i][col - i] === currentPlayer &&
        board[row - i + 1] === currentPlayer &&
        board[row - i + 2] === currentPlayer &&
        board[row - i + 3] === currentPlayer
      ) {
        return true;
      }
    }

    // Check diagonally (top-right to bottom-left)
    for (let i = 0; i < 4; i++) {
      if (
        board[row - i] &&
        board[row - i][col + i] === currentPlayer &&
        board[row - i + 1] === currentPlayer &&
        board[row - i + 2] === currentPlayer &&
        board[row - i + 3] === currentPlayer
      ) {
        return true;
      }
    }

    return false;
  };

  const resetGame = () => {
    setBoard(initialState);
    setCurrentPlayer('Player 1');
  };

  return (
    <>
    <View>
      
    </View>
    <View style={styles.container}>
    <Text style={styles.titleText}>Linked 4</Text>
    <Text style={[styles.turnText, currentPlayer === 'Player 1' ? styles.playerOne : styles.playerTwo]}>{`${currentPlayer}'s Turn`}</Text>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <TouchableOpacity
            key={colIndex}
            style={styles.cell}
            onPress={() => handlePress(colIndex)}
            disabled={!!cell}
          >
            {cell === 'Player 1' && (
              <Image source={require('../assets/red_token.png')} style={styles.tokenImage} />
            )}
            {cell === 'Player 2' && (
              <Image source={require('../assets/black_token.png')} style={styles.tokenImage} />
            )}
          </TouchableOpacity>
          
          ))}
        </View>
      ))}
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetButtonText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393d74',
    marginTop: '50%',
    padding: 'auto',
    maxWidth: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 45,
    height: 45,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 50,
  },
  cellText: {
    fontSize: 20,
  },
  resetButton: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#393d74',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ffffff',
    borderWidth: 2,
  },  
  resetButtonText: {
    color: 'white',
    fontSize: 18,
  },
  tokenImage: {
    height: 50,
    width: 50,
  },
  titleText: {
    fontFamily: 'Jua',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  turnText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  playerOne: {
    color: 'red',
  },
  playerTwo: {
    color: 'black',
  },
});

export default Board;
