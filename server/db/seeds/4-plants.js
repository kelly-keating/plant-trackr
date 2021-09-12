exports.seed = knex => {
  return knex('plants').insert([
    { 
      id: 1, 
      name: 'Michelle Ssssavage', 
      species: 1, 
      img: 'snake_plant.jpg',
      note: 'is cute'
    },
  ])
}
