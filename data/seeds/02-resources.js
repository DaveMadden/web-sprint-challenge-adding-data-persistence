
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      resource_name: 'README file',
      resource_description: 'the file that tells you what to do'
    },
    {
      resource_name: 'internet connection',
      resource_description: 'cannot put shit on git without the interwebs'
    },
    {
      resource_name: 'multiple monitors',
      resource_description: 'great way to see more at one time without the friction of window-switching'
    },
    {
      resource_name: 'rubber chicken',
      resource_description: 'not useful for sprint challenge tbh, but good to have around'
    }
  ]);
};