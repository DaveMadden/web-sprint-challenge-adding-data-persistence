const db = require('../../data/dbConfig')

async function getTasks(){
    return await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')
}

//never called externally, but required to return desired result from createProject()
async function getTaskById(id){
    return await db('tasks as t')
        .where('t.task_id', id)
        .first();
}

async function createTask(task){
    const [result] = await db('tasks').insert(task);
    return getTaskById(result);
}

module.exports = {
    getTasks,
    createTask
};