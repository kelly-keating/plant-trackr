exports.seed = knex => {
  return knex('water').insert([
    { id: 0, amount: 'some drips' },
    { id: 1, amount: 'a little sploot' },
    { id: 2, amount: 'make it damp' },
    { id: 3, amount: 'drench me' },
  ])
}
