
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {name: 'John'},
        {name: 'Snow'}
      ]);
    });
};
