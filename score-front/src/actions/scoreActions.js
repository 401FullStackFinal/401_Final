import superagent from 'superagent';

const URL = 'http://localhost:8080';

const DELETE_SCORE = function(newScoreList){
  return {
    type: 'DELETE_SCORE',
    payload: newScoreList
  }  
};

const GET_SCORE = function(scoreList){
  return {
    type: 'GET_SCORE',
    payload: scoreList
  }
}

const NEW_SCORE = function(scoreList){
  return {
    type: 'NEW_SCORE',
    payload: scoreList
  }
}

export const deleteScore = function(name){
  return (dispatch) => {
    //ASYNC CALL TO DB GOES HERE BEFORE DISPATCH TO REDUCER
    return superagent
      .delete(`${URL}/score/${name}`)
      .then((response) => {
        dispatch(DELETE_SCORE(response.body));
      });
  }
}

export const getScores = function(){
  return (dispatch) => {
    return superagent
      .get(`${URL}/score`)
      .then((response) => {
        dispatch(GET_SCORE(response.body));
      });
  }
}

export const newScore = function(score){
  console.log(score.id);
  return (dispatch) => {
    return superagent
      .patch(`${URL}/score/addOne/${score.id}`)
      .send(score)
      .then((response) => {
        dispatch(NEW_SCORE(response.body));
      })
  }
}
