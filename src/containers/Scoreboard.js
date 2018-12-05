import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import AddPlayerForm from '../components/AddPlayerForm';
import PlayerDetail from '../components/PlayerDetail';
import Player from '../components/Player';
import Header from '../components/Header';


 class Scoreboard extends Component {
   static propTypes = {
     players: PropTypes.array.isRequired
   };

//7 is selectedPlayerIndex //8 is const selectPlayer //9 is let selectedPlayer;  //10 is selectPLayer={selectPlayer}
//10 is <PlayerDetail selectedPlayer={selectedPlayer}
  render () {
    const {dispatch, players, selectedPlayerIndex} = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);


    let selectedPlayer;
    if(selectedPlayerIndex !== -1){
      selectedPlayer = players[selectedPlayerIndex];
    }

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer}
      />
    ));

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
        <div className="player-detail">
          <PlayerDetail selectedPlayer={selectedPlayer} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
);
//The first set of parentheses contains the function we want to use to transform
//state to props and the second set of parenthesis contains the container.
export default connect(mapStateToProps)(Scoreboard);
