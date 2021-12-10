const db = require('../../data/dbConfig')

async function getProjects(){
    const rows = await db('projects')

    rows.forEach(row => {
        row.project_completed = Boolean(row.project_completed)
    })

    return rows;
}

async function getProjectById(id){
    const row = await db('projects as p').where('p.project_id', id).first()

    if(row===undefined){ //if no project by this id, return null
        return null
    }
    
    row.project_completed = Boolean(row.project_completed)
    return row;
}

async function createProject(project){
    const [result] = await db('projects').insert(project);
    return getProjectById(result);
}

module.exports = {
    getProjects,
    getProjectById,
    createProject
};