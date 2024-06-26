const { Router } = require('express')
const getCharById = require('../controllers/getCharByid')
const login = require('../controllers/login')
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')
const deleteFav = require('../controllers/deleteFav') 

const router = Router()

router.get('/character/:id', getCharById)
router.get('/login', login)
router.post('/login', postUser)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router;