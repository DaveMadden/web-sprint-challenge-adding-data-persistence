const db = require('../../data/dbConfig')

async function getResources(){
    return await db('resources')
}

//never called externally, but required to return desired result from createProject()
async function getResourceById(id){
    return await db('resources as r').where('r.resource_id', id).first();
}

async function createResource(resource){
    const [result] = await db('resources').insert(resource);
    return getResourceById(result);
}

module.exports = {
    getResources,
    createResource
};