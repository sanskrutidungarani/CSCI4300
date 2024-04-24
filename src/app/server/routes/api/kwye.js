const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const KWYE = require('../../models/kwye.js');


// GET a specific car by ID
router.get('/:id', (req, res) => {
    KWYE.findById(req.params.id)
        .then((kwye) => {
            if (!kwye) {
                return res.status(404).json({ noitemfound: 'No Item Found' });
            }
            res.json(kwye);
        })
        .catch((err) => res.status(500).json({ error: err.message }));
});

// GET all cars
router.get('/', (req, res) => {
    KWYE.find()
        .then((items) => res.json(items))
        .catch((err) => res.status(500).json({ error: err.message }));
});

// POST a new car
router.post('/', bodyParser.json(), (req, res) => {
    KWYE.create(req.body)
        .then((kwye) => res.status(201).json({ msg: 'Item added Successfully', kwye }))
        .catch((err) => res.status(400).json({ error: err.message }));
});

// UPDATE a car by ID
router.put('/:id', bodyParser.json(), (req, res) => {
    KWYE.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((kwye) => {
            if (!kwye) {
                return res.status(404).json({ error: 'Item not found' });
            }
            res.json({ msg: 'Updated Successfully', kwye });
        })
        .catch((err) => res.status(400).json({ error: err.message }));
});

// DELETE a car by ID
router.delete('/:id', (req, res) => {
    KWYE.findByIdAndDelete(req.params.id)
        .then((kwye) => {
            if (!kwye) {
                return res.status(404).json({ error: 'Item not found' });
            }
            res.json({ msg: 'Item entry deleted successfully', kwye });
        })
        .catch((err) => res.status(400).json({ error: err.message }));
});

module.exports = router;
