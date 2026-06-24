const router = require('express').Router()

const {
    createMenuItem,
    getMenuItem,
    getPagedMenuItems
} = require('../controllers/menuItemsController')

router.post('/menu-item', createMenuItem)

router.get('/menu-item/:id', getMenuItem)

router.get('/menu-items', getPagedMenuItems)

module.exports = router;
