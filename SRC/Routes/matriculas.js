const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers/matriculasController');
const { requireJson, validateMatriculas } = require('../Middlewares/validate');

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', requireJson, validateMatriculas, ctrl.create);
router.put('/:id', requireJson, validateMatriculas, ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
