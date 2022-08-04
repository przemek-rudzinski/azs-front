import { useState } from 'react'
import PalyersList from '../components/PlayersList'
import TeamPicker from '../components/TeamPicker'
import defaultMatch from '../data/startingData'

const StartPage = () => {
  const [players, setPlayers] = useState(defaultMatch.zawodnik)

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
      <h1>SKŁAD</h1>
      <PalyersList onSquadChange={handleSquadChange} players={players} />
      <div className='flex justify-center  flex-row'>
        <button className='bg-green-700/95 shadow z-50 m-5 p-2 rounded-lg text-white text-lg hover:bg-green-500'>
          Start Match
        </button>
      </div>
    </>
  )
}

export default StartPage
