const { Pokemon, Trainer } = require('./db')

const pokemon = [
  {
    name: 'Pikachu',
    type: ['electric'],
    weakness: ['ground'],
    gender: 'both',
    weight: 13.2,
    hp: 2,
    attack: 3,
    defense: 2,
    specialAttack: 2,
    specialDefense: 2,
    speed: 5
  },
  {
    name: 'Squirtle',
    type: ['water'],
    weakness: ['ground'],
    gender: 'both',
    weight: 13.2,
    hp: 2,
    attack: 3,
    defense: 2,
    specialAttack: 2,
    specialDefense: 2,
    speed: 5
  },
  {
    name: 'Bulbasaur',
    type: ['grass'],
    weakness: ['ground'],
    gender: 'both',
    weight: 13.2,
    hp: 2,
    attack: 3,
    defense: 2,
    specialAttack: 2,
    specialDefense: 2,
    speed: 5
  },
  {
    name: 'Charmander',
    type: ['fire'],
    weakness: ['ground'],
    gender: 'both',
    weight: 13.2,
    hp: 2,
    attack: 3,
    defense: 2,
    specialAttack: 2,
    specialDefense: 2,
    speed: 5
  }
]

const pokePromises = pokemon.forEach(p => {
  Pokemon.create(p);
})

Promise.all(pokePromises)
  .then(() => {
    console.log('pokemon created');
  })
  .catch(err => {
    console.log(err);
  });
