const {Router} = require("express")
const router = Router()
// const {Authentication} = require("../middleware/authentication")
const {Discount} = require("../models/discount.model")



router.post('/create' , logUser)


module.exports = router