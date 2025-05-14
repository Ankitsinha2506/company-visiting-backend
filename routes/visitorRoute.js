const express = require('express');
const { createVisitor, getAllVisitors, updateVisitor, deleteVisitor, getVisitorById } = require('../controllers/visitorController');
const router = express.Router();

router.post('/create', createVisitor);
router.get('/', getAllVisitors);
router.get('/:id', getVisitorById);
router.put('/update/:id', updateVisitor);
router.delete('/delete/:id', deleteVisitor)

module.exports = router;
