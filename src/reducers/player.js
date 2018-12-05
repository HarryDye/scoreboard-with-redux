//take all exports from the player.js file in the action types folder and
//set them as properties on an object called PlayerActionTypes.
import * as PlayerActionsTypes from '../actiontypes/player';

const initialState = {
	players: [{
		name: 'Jim Hoskins',
	  score: 31,
		created: '11/8/2016',
		updated: '11/9/2016'
	},
	{
		name: 'Andrew Chalkley',
		score: 20,
		created: '11/9/2016',
		updated: '11/10/2016'
	},
	{
		name: 'Alena Holligan',
		score: 50,
		created: '11/11/2016',
		updated: '11/12/2016'
	}
	],
	selectedPlayerIndex: -1
}
//state=initialState allows us to assign a default value for our state in the event one is not provided or is undefined.
//5 is the let dates and the `${day}/${month}/${year}` and the restructuring with const addPlayerList
export default function Player(state=initialState, action){

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    switch(action.type){
      case PlayerActionsTypes.ADD_PLAYER:{
        const addPlayerList = [...state.players, {
          name: action.name,
          score: 0,
          created: `${day}/${month}/${year}`
        }];
        return{
          ...state,
          players: addPlayerList
        };
      }

      case PlayerActionsTypes.REMOVE_PLAYER:{
      const removePlayerList = [
        ...state.players.slice(0, action.index),
        ...state.players.slice(action.index + 1)
      ];
      return{
        ...state,
        players: removePlayerList
      };
    }

      case PlayerActionsTypes.UPDATE_PLAYER_SCORE:
      const updatePlayerList = state.players.map((player, index) => {
        if(index === action.index) {
          return {
            ...player,
            score: player.score + action.score,
            updated: `${day}/${month}/${year}`
          };
        }
        return player;
      });
      return{
        ...state,
        players: updatePlayerList
      };

//2,3,4
      case PlayerActionsTypes.SELECT_PLAYER:
      return {
        ...state,
          selectedPlayerIndex: action.index
      };

      default:
        return state;
    }
}
