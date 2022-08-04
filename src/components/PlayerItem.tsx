import { playerType } from '../data/startingData'

const PlayerItem = (props: { player: playerType; onPlayerChange: any }) => {
  const FindImg = (proops: { name: string }) => {
    let imgPath = ''
    try {
      imgPath = require('../images/' + proops.name + '.png')
    } catch (err) {
      imgPath = require('../images/Bongo.png')
    }
    console.log(imgPath)
    return (
      <img src={imgPath} alt={proops.name} width={70} height={70} style={{ borderRadius: '50%' }} />
    )
  }
  return (
    <>
      <li className='bg-blue-400 m-5 p-2 flex flex-row basis-1 w-72 justify-between'>
        <div className='flex flex-row items-center '>
          <FindImg name={props.player.nazwa} />
          <h3 className='flex m-1'>
            {props.player.numerZawodnika} . {props.player.nazwa}
          </h3>
        </div>
        <button
          className='m-5 bg-green-200 p-2 px-4 '
          onClick={props.onPlayerChange}
          value={props.player.nazwa}
        >
          out
        </button>
      </li>
    </>
  )
}

export default PlayerItem
