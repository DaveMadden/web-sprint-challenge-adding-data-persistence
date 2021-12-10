
const Project = require('../project/model')

function validateProjectID(req, res, next){
    Project.getProjectById(req.body.project_id)
        .then(response =>{
            if(!response){
                res.status(400).json({ message: `there is no project with id ${req.body.project_id}`})
            }
            else{
                next()
            }
        })
        .catch(next)
}

module.exports = { validateProjectID }