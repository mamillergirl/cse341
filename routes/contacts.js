const express = require('express');

const contactsController = require('../controllers/contacts');

const router = express.Router();


router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getOne);

module.exports = router;