import { useSelector } from 'react-redux'
import OnFieldPlayer from '../components/OnFieldPlayer'
import { playerType } from '../data/startingData'

const GamePage = () => {
  const players = useSelector((state: any) => state.match.value)
  return (
    <>
      <div className='flex aligin-center bg-green-700/95 shadow-xl p-2 pb-4 '>
        <h1 className='text-green-100 mx-5 font-medium font-sans'>AZS UW - statystyki meczowe</h1>
      </div>
      <div className='flex flex-row'>
        <div className=' w-full grid grid-cols-3'>
          {players.map((p: playerType) => (
            <OnFieldPlayer key={p.nazwa} player={p} />
          ))}
        </div>
      </div>
    </>
  )
}

export default GamePage
