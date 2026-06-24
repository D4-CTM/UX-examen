const router = require('express').Router()

const {
    createBill,
} = require('../controllers/billController')

router.post('/bill', createBill)

module.exports = router;
