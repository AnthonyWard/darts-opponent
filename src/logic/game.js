import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    total: 501,
    options: {
      total: 501,
      legs: 3
    },
    leg: {
      player1: {
        legsWon: 0,
        scores: [],
        turn: true
      },
      player2: {
        legsWon: 0,
        scores: []
      }
    },
    currentLeg: 1,
    history: [
      {
        player1: {
          legsWon: 1,
          scores: [180, 26, 7]
        }
    ]
  },
  reducers: {
    addScore(state, action) {
      const score = action.payload
      state.scores.push(score);
      state.total -= score;
    }
  },
})

export const { addScore } = gameSlice.actions

export default gameSlice.reducer