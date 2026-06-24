const { MenuItem } = require('../models')

async function createMenuItem(req, res) {
    try {
        const body = req.body;

        console.log(req)

        if (!body.Name)
            return es.status(400).json({ message: 'Name is required' })

        if (!body.Description)
            return es.status(400).json({ message: 'Description is required' })

        if (!body.Price)
            return es.status(400).json({ message: 'Price is required' })

        const item = MenuItem.create({
            name: body.Name,
            description: body.Description,
            price: body.Price,
        });

        res.status(200).json({ message: 'Successfully created menu item!', body: item })
    } catch (ex) {
        res.status(500).json({ message: ex.message })
    }
}

async function getMenuItem(req, res) {
    try {
        const { id } = req.params;

        const item = MenuItem.findByPk(id);

        if (!item)
            return res.status(404).json({ message: `Menu Item #${id} not found!` })

        res.status(200).json({ message: `Found menu item #${id}!`, body: item })
    } catch (ex) {
        res.status(500).json({ message: ex.message })
    }
}

async function getPagedMenuItems(req, res) {
    try {
        const query = req.query;
        const offset = query.offset || 0;
        const limit = query.limit || 10;

        if (limit < 1)
            return res.status(400).json({ message: "limit must be greater than 0" });

        if (offset < 0)
            return res.status(400).json({ message: "offset must be greater or equal than 0" });

        const items = await MenuItem.findAndCountAll({ limit, offset })

        res.status(200).json({ message: `Found ${items.count} menu items!`, body: { total: items.count, data: items.rows } })
    } catch (ex) {
        res.status(500).json({ message: ex.message })
    }
}

module.exports = {
    createMenuItem,
    getMenuItem,
    getPagedMenuItems
}
