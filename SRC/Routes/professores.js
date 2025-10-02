const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers/professoresController');
const { requireJson, validateProfessores } = require('../Middlewares/validate');

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', requireJson, validateProfessores, ctrl.create);
router.put('/:id', requireJson, validateProfessores, ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
