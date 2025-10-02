const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers/turmasController');
const { requireJson, validateTurmas } = require('../Middlewares/validate');

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', requireJson, validateTurmas, ctrl.create);
router.put('/:id', requireJson, validateTurmas, ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;