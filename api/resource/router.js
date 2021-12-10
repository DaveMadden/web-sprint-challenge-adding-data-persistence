const express = require('express')
const router = express.Router()

const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(rsrce => {
            res.status(200).json(rsrce)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
        .then(rsrce =>{
            res.status(201).json(rsrce)
        })
        .catch(next)
})


module.exports = router