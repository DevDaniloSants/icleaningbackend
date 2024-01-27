import customerController from '../controllers/customerController';

const express = require('express');
const router = express.Router();

// routers
router.get('/', customerController.show);
router.post('/', customerController.register);
router.get('/routes', customerController.sortOder);

export default router;
