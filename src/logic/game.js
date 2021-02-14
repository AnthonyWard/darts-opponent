import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    total: 501,
    scores: []
  },
  reducers: {
    addScore(state, action) {
      const score = action.payload
      state.scores.push(score);
      state.total -= score;
    }
  }
})

export const { addScore } = gameSlice.actions

export default gameSlice.reducer