import React, {PropTypes} from 'react';
import Counter from './Counter';


// Move to components/Player.js
// ----------------------------------------------------------------------
//12,13 onClick={ () => props.selectPlayer(props.index)}
const Player = props => {
  return (
    <div className="player">
      <div className="player-name" onClick={ () => props.selectPlayer(props.index)}>
        <a className="remove-player" onClick={ () => props.removePlayer(props.index)}>✖</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter
        index={props.index}
        updatePlayerScore={props.updatePlayerScore}
        score={props.score} />
      </div>
    </div>
  );
}
//12.13
Player.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  removePlayer: PropTypes.func.isRequired,
  updatePlayerScore: PropTypes.func.isRequired,
  selectPlayer: PropTypes.func.isRequired
};

export default Player;
