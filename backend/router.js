'use strict';

const express = require('express');
const toyRoute = express.Router();
const uuid = require('uuid/v4');

let Khali =  { _id: uuid(), name: 'Baby Khaleesi', favorite_toy: 'dumbells'};
let Ginger = { _id: uuid(), name: 'Ginger', favorite_toy: 'bananas' };
let Khal = { _id: uuid(), name: 'Khal Basil', favorite_toy: 'anything' };
let Rosie = { _id: uuid(), name: 'Rosie', favorite_toy: 'ball' };
let Demi = { _id: uuid(), name: 'Demi Dog', favorite_toy: 'rope' };

let toy = [Khali, Ginger, Khal, Rosie, Demi];

// let pets = {
//   Khali: { _id: uuid(), name: 'Baby Khaleesi', favorite_toy: 'dumbells'},
//   Ginger: { _id: uuid(), name: 'Ginger', favorite_toy: 'bananas' },
//   Khal: { _id: uuid(), name: 'Khal Basil', favorite_toy: 'anything' },
//   Rosie: { _id: uuid(), name: 'Rosie', favorite_toy: 'ball' },
//   Demi: { _id: uuid(), name: 'Demi Dog', favorite_toy: 'rope' }
// };

// let toy = Object.keys(pets);


toyRoute.get('/toys', (request, response) =>  {
  response.send(toy);
} );

toyRoute.post('/toys', (request, response) => {
  let newToy = { _id: uuid(), name: request.body.name, favorite_toy: request.body.favorite_toy };
  toy.push(newToy);
  response.send(newToy);
});

toyRoute.delete('/toys/:id', (request, response) => {
  const deleteData = request.body._id;
  toy.forEach((toys, index) => {
    if (toys._id === deleteData) {
      toy.splice(index, 1);
    }
  })
  console.log(toy);
  response.send(toy);
});


module.exports = toyRoute;
