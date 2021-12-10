const db = require('../../data/dbConfig')

async function getProjects(){
    return await db('projects')
}

//never called externally, but required to return desired result from createProject()
async function getProjectById(id){
    return await db('projects as p').where('p.project_id', id).first()
}

async function createProject(project){
    const [result] = await db('projects').insert(project);
    return getProjectById(result);
}

module.exports = {
    getProjects,
    createProject
};