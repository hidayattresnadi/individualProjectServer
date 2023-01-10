const express = require('express')
const UserController = require('../Controller/UserController')
const router = express.Router()

router.post('/register',UserController.register)
// router.post('/login',UserController.login)
// router.post('/googleLogin',UserController.googleLogin)
// router.get('/showGenshin',Controller.showGenshinCharacter)
// router.get('/showAnime',Controller.showAnime)
module.exports=router