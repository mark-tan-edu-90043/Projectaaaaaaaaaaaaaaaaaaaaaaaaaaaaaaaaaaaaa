import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const ROWS = 6;
const COLS = 7;

const initialState = Array.from({ length: ROWS }, () => Array(COLS).fill(null)) //Resets stuff

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

  const resetGame = () => { //Resets the board
    setBoard((prevBoard) => { //Fixes some async errors, apparently.
      const newBoard = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
      return newBoard;
    });
  
    setCurrentPlayer('Player 1');
  };

  function checkForWin(grid) { //Now (exhaustively) checks every space every token token for a win.
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === currentPlayer) {
          try {
            if (grid[i + 1][j] === currentPlayer &&
                grid[i + 2][j] === currentPlayer &&
                grid[i + 3][j] === currentPlayer) {
              return true;
            }
          } catch (error) {}
  
          try {
            if (grid[i + 1][j + 1] === currentPlayer &&
                grid[i + 2][j + 2] === currentPlayer &&
                grid[i + 3][j + 3] === currentPlayer) {
              return true;
            }
          } catch (error) {}
  
          try {
            if (grid[i + 1][j - 1] === currentPlayer &&
                grid[i + 2][j - 2] === currentPlayer &&
                grid[i + 3][j - 3] === currentPlayer) {
              return true;
            }
          } catch (error) {}
  
          try {
            if (grid[i][j + 1] === currentPlayer &&
                grid[i][j + 2] === currentPlayer &&
                grid[i][j + 3] === currentPlayer) {
              return true;
            }
          } catch (error) {}
  
          try {
            if (grid[i][j - 1] === currentPlayer &&
                grid[i][j - 2] === currentPlayer &&
                grid[i][j - 3] === currentPlayer) {
              return true;
            }
          } catch (error) {}
  
          try {
            if (grid[i - 1][j + 1] === currentPlayer &&
                grid[i - 2][j + 2] === currentPlayer &&
                grid[i - 3][j + 3] === currentPlayer) {
              return true;
            }
          } catch (error) {}
  
          try {
            if (grid[i - 1][j - 1] === currentPlayer &&
                grid[i - 2][j - 2] === currentPlayer &&
                grid[i - 3][j - 3] === currentPlayer) {
              return true;
            }
          } catch (error) {}
        }
      }
    }
    return false;
  }

  return (
    <>
    <View>
      <Text style={styles.titleText}>Linked 4</Text>
    </View>
    <View style={[styles.row, styles.playerBoxes]}>
      <View style={[styles.playerTag, styles.row, currentPlayer === 'Player 1' ? styles.playerTagActive : null]}>
        <Image source={require('../assets/p1_token.png')} style={styles.tokenImage} />
        <Text style={styles.nameTag}> Player 1 </Text>
      </View>
      <View style={[styles.playerTag, styles.row, currentPlayer === 'Player 2' ? styles.playerTagActive : null]}>
        <Image source={require('../assets/p2_token.png')} style={styles.tokenImage} />
        <Text style={styles.nameTag}> Player 2 </Text>
      </View>
    </View>
    <View style={styles.container}>
    <Text style={[styles.turnText, currentPlayer === 'Player 1' ? styles.playerOne : styles.playerTwo]}>{`${currentPlayer}'s Turn`}</Text>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => ( //Places the image and disables the cell to be tapped
            <TouchableOpacity
            key={colIndex}
            style={styles.cell}
            onPress={() => handlePress(colIndex)}
            disabled={!!cell}
          >
            {cell === 'Player 1' && (
              <Image source={require('../assets/p1_token.png')} style={styles.tokenImage} />
            )}
            {cell === 'Player 2' && (
              <Image source={require('../assets/p2_token.png')} style={styles.tokenImage} />
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
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393d74',
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
    paddingTop: 20,
    fontFamily: 'Jua-Regular',
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
  },
  turnText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  playerOne: {
    color: '#ED8FA1',
  },
  playerTwo: {
    color: '#F3E0AE',
  },
  playerBoxes: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  playerTag: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#393d74',
    padding: 20,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally  
    opacity: 0.7,
  },  
  playerTagActive: {
    borderRadius: 5,
    borderColor: '#ffffff',
    borderWidth: 2,
    opacity: 1,
  },
  nameTag: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  }
});

export default Board;
