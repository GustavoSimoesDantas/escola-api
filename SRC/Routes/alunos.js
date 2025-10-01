const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers/alunosController');
const { requireJson, validateAlunos } = require('../Middlewares/validate');

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', requireJson, validateAlunos, ctrl.create);
router.put('/:id', requireJson, validateAlunos, ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;