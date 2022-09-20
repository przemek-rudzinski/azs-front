import { useDispatch } from 'react-redux'
import { playerType } from '../data/startingData'
import { updatePlayer } from '../features/Players'
import CategoryField from './Category'
import { FindImg } from './PlayerItem'

const OnFieldPlayer = (props: { player: playerType }) => {
  const dispatch = useDispatch()
  const player = props.player
  return (
    <div className=' bg-gray-50 m-5 p-2  justify-between shadow-xl rounded-lg'>
      <div className='flex '>
        <div className='flex mr-5'>
          <FindImg name={player.nazwa} />
        </div>
        <div className='flex flex-col content-center justify-center '>
          <p>
            {player.numerZawodnika}. {player.nazwa}
          </p>
        </div>
      </div>
      <p className='text-center text-green-100  border-green-700 border-t-2 bg-green-700 rounded-t-lg '>
        impact{' '}
      </p>
      <div className='w-full grid grid-cols-2 border-x-2 border-b-2 border-green-700 mr-5 rounded-b-lg bg-white mb-2'>
        {Object.entries(player.impact).map(([key, value]) => {
          return (
            <CategoryField
              onFieldUpdate={(val: number) => {
                const updatedCategory = { ...player.impact, [key]: val }
                console.log(val, key, updatedCategory)
                dispatch(
                  updatePlayer({
                    nazwa: player.nazwa,
                    category: updatedCategory,
                    categoryName: 'impact',
                  }),
                )
              }}
              key={key}
              objectKey={key}
              value={value}
            />
          )
        })}
      </div>
    </div>
  )
}

export default OnFieldPlayer
