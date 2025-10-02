const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers/cursosController');
const { requireJson, validateCursos } = require('../Middlewares/validate');

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', requireJson, validateCursos, ctrl.create);
router.put('/:id', requireJson, validateCursos, ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
