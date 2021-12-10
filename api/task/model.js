const db = require('../../data/dbConfig')

async function getTasks(){
    const joined = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')
    
    joined.forEach(row =>{
        row.task_completed = Boolean(row.task_completed)
    })

    return joined;
}

//never called externally, but required to return desired result from createProject()
async function getTaskById(id){
    const row = await db('tasks as t')
        .where('t.task_id', id)
        .first();
    row.task_completed = Boolean(row.task_completed)
    return row;
}

async function createTask(task){
    const [result] = await db('tasks').insert(task);
    return getTaskById(result);
}

module.exports = {
    getTasks,
    createTask
};