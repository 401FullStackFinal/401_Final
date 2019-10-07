'use strict';

// mongoose schema, array of objects 
const scores = mongoose.Schema ({
  id: {type: String, required: true, unique: true}, 
  name: {type: String, required: true},
  score: {type: Number, required: true}, 
});

let starterData = [
  { id: uuid(), name: 'Baby Khaleesi', score: 10000000 },
  { id: uuid(), name: 'Ginger', score: 100 },
  { id: uuid(), name: 'Khal Basil', score: 100 },
  { id: uuid(), name: 'Rosie', score: 99 },
  { id: uuid(), name: 'Demi Dog', score: 50 },
];




module.exports = Model;