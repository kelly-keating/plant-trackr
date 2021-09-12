exports.seed = knex => {
  return knex('species').insert([
    { 
      id: 1,
      common: 'snake plant',
      scientific: 'dracaena trifasciata',
      water: 2,
      water_freq: 20,
      light: 0,
      notes: 'water soil, not plant and only when dry'
    },
  ])
}
