import { playerType } from '../data/startingData'
import PlayerItem from './PlayerItem'

const PlayersList = (
  props: {
    players: playerType[]
    onSquadChange: (playerName: string) => void
  },
  value: string,
) => {
  return (
    <ul>
      {props.players
        .sort((a, b) => (a.numerZawodnika > b.numerZawodnika ? 1 : -1))
        .map((player, i) =>
          player.sklad ? (
            <PlayerItem
              key={Math.random().toString(36).substr(2, 9)}
              onPlayerChange={() => props.onSquadChange(player.nazwa)}
              player={player}
            />
          ) : null,
        )}
    </ul>
  )
}

export default PlayersList
