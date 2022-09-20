import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from '../components/MatchForm'

import PlayersList from '../components/PlayersList'
import TeamPicker from '../components/TeamPicker'
import defaultMatch from '../data/startingData'

const StartPage = () => {
  const [players, setPlayers] = useState(defaultMatch.zawodnik)
  const [date, setDate] = useState('')
  const navigate = useNavigate()
  function handleSquadChange(playerName: string) {
    const name = playerName
    console.log(name)
    const array = players
    const index = array.map((object) => object.nazwa).indexOf(name)
    console.log(index)
    if (index >= 0) {
      array[index].sklad = !array[index].sklad
      console.log(array[index].sklad)
      setPlayers([...array])
    }
  }
  return (
    <>
      <div className='flex aligin-center bg-green-700/95 shadow-xl p-2 pb-4 '>
        <h1 className='text-green-100 mx-5 font-medium font-sans'>AZS UW - statystyki meczowe</h1>
      </div>
      <TeamPicker />

      <div className='flex justify-evenly flex-row'>
        <DatePicker onDayChange={(val: any) => setDate(val)} />
        <PlayersList onSquadChange={handleSquadChange} players={players} squad={true} />
        <PlayersList onSquadChange={handleSquadChange} players={players} squad={false} />
      </div>
      <div className='flex justify-center  flex-row'>
        <button
          onClick={() => {
            const Match = defaultMatch
            Match.date = date
            Match.zawodnik = players
            console.log(Match)
            navigate('Game')
          }}
          className='bg-green-700/95 shadow z-50 m-5 p-3 px-5 rounded-xl text-white text-2xl hover:bg-green-500'
        >
          Start Match
        </button>
      </div>
    </>
  )
}

export default StartPage
