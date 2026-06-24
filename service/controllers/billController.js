const { Bill } = require('../models')

async function createBill(req, res) {
    try {
        const body = req.body;

        if (!body.PaymentType)
            return res.status(400).json({ message: 'PaymentType is required' })

        if (!body.DeliveryType)
            return res.status(400).json({ message: 'DeliveryType is required' })

        if (!body.Subtotal)
            return res.status(400).json({ message: 'Subtotal is required' })

        if (!body.Discount)
            return res.status(400).json({ message: 'Discount is required' })

        if (!body.Total)
            return res.status(400).json({ message: 'Total is required' })

        if (!body.Details)
            return res.status(400).json({ message: 'Details is required' })

        const item = await Bill.create({
            paymentType: body.PaymentType,
            deliveryType: body.DeliveryType,
            subtotal: body.Subtotal,
            discount: body.Discount,
            total: body.Total,
            details: body.Details
        });

        res.status(200).json({ message: 'Successfully created bill!', body: item })
    } catch (ex) {
        res.status(500).json({ message: ex.message })
    }
}

module.exports = {
    createBill,
}
