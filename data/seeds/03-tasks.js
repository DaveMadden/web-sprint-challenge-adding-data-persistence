
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      task_description: 'read instructions',
      task_notes: 'clone the project and read the readme file',
      project_id: '1'
    },
    {
      task_description: 'write code',
      task_notes: 'do the things that need doing',
      project_id: '1'
    },
    {
      task_description: 'save code',
      task_notes: 'push code to github',
      project_id: '1'
    },
  ]);
};