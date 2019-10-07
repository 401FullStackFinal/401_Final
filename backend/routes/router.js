'use strict';

const express = require('express');
const scoreRoute = express.Router();
const uuid = require('uuid/v4');


let scores = [
  { id: uuid(), name: 'Baby Khaleesi', score: 10000000 },
  { id: uuid(), name: 'Ginger', score: 100 },
  { id: uuid(), name: 'Khal Basil', score: 100 },
  { id: uuid(), name: 'Rosie', score: 99 },
  { id: uuid(), name: 'Demi Dog', score: 50 },
];


scoreRoute.get('/score', getScores);
scoreRoute.post('/score/addOne', addNewScore);
// scoreRoute.delete('/score/:id', deleteOne);
// scoreRoute.get('/score/:id', getHigherScores); 


// GET /scores
function getScores(request, response) {
  response.send(scores.score);
};

// POST /scores
function addNewScore(request, response){
  let newData = request.body; 
  score.push(newData);
  response.send(scores);
}

// DELETE /scores
function deleteOne(request, response) {
  let deleteData = request.params.id; 
  let newScoreList = scores.filter(id => {
    return id.name !== deleteData;
  })
  scores = [...newScoreList];
  response.send(scores);
}

// GET /scores-bigger-than/:value


// function rewriteFood(request, response){
//   let { originalName, name, flavor } = request.body;
//   let newName = name;
//   let newFlavor = flavor;
//   food.map( dish => dish.name === originalName ? Object.assign(dish, {name:newName, flavor:newFlavor}) : dish );
//   response.send(food);
// }

module.exports = scoreRoute;
