
exports.seed = function(knex) {
  return knex('projects').insert([
    {project_name: 'complete sprint'}
  ]);
};