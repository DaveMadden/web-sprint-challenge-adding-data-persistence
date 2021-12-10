
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      project_name: 'complete sprint',
      project_description: 'finish the 4.2 Sprint Challenge'
    }
  ]);
};