const express = require('express')
const router = express.Router()

const Task = require('./model')

const { validateProjectID } = require('./middleware')

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(next)
})

router.post('/', validateProjectID, (req, res, next) => {
    Task.createTask(req.body)
        .then(task =>{
            res.status(201).json(task)
        })
        .catch(next)
})

module.exports = router