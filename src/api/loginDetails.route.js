'use strict'

const { Router } = require('express')
const LoginDetailsCtrl = require('./loginDetails.controller')
const router = new Router()

router.route('/')
  .get(LoginDetailsCtrl.apiGetLoginDetails)
  .post(LoginDetailsCtrl.apiAddLoginDetails)

router.route('/id/:id')
  .put(LoginDetailsCtrl.apiUpdateLoginDetailsById)
  .delete(LoginDetailsCtrl.apiDeleteLoginDetailsById)

module.exports = router
