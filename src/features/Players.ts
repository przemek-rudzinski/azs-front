import { createSlice } from '@reduxjs/toolkit'
import defaultMatch, { playerType } from '../data/startingData'

const emptyData: playerType[] = [
  defaultMatch.zawodnik[0],
  defaultMatch.zawodnik[1],
  defaultMatch.zawodnik[2],
  defaultMatch.zawodnik[3],
  defaultMatch.zawodnik[4],
]

export const matchSlice = createSlice({
  name: 'match',
  initialState: { value: emptyData },
  reducers: {
    addMatch: (state, action) => {
      state.value = action.payload
    },

    updatePlayer: (state, action) => {
      const players = state.value
      console.log('players here', players)
      state.value.map((player: any) => {
        if (player.nazwa === action.payload.nazwa) {
          player[action.payload.categoryName] = action.payload.category
        }
      })
    },
  },
})

export const { addMatch, updatePlayer } = matchSlice.actions
export default matchSlice.reducer
