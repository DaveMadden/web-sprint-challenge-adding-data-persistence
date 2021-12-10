const db = require('../../data/dbConfig')

async function getProjects(){
    const rows = await db('projects')

    rows.forEach(row => {
        row.project_completed = Boolean(row.project_completed)
    })

    return rows;
}

//never called externally, but required to return desired result from createProject()
async function getProjectById(id){
    const row = await db('projects as p').where('p.project_id', id).first()
    row.project_completed = Boolean(row.project_completed)
    return row;
}

async function createProject(project){
    const [result] = await db('projects').insert(project);
    return getProjectById(result);
}

module.exports = {
    getProjects,
    createProject
};