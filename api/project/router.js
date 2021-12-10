const express = require('express')
const router = express.Router()

const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then(proj =>{
            res.status(201).json(proj)
        })
        .catch(next)
})


module.exports = router