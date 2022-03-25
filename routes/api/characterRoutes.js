const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

router.get('/', (req, res)=>{
    const URL = 'https://api.sampleapis.com/avatar/characters'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('characters', {
                title: 'Characters',
                name: 'Avatar Characters!',
                data
            })
        })
})

router.get('/:id', (req, res)=>{
    const id = req.params.id
    const URL = `https://api.sampleapis.com/avatar/characters/${id}`

    fetch(URL)
        .then(res=> res.json())
        .then(data => {
            res.render('characterSingle', {
                title: `${data.name}`,
                name: `${data.name}`,
                data
            })
        })
})


module.exports = router