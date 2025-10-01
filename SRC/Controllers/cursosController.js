const db = require('../Data/db');

exports.list = (req, res) => res.json(db.cursos);

exports.get = (req, res) => {
  const id = parseInt(req.params.id);
  const item = db.cursos.find(a => a.id === id);
  if (!item) return res.status(404).json({ error: 'Curso não encontrado' });
  res.json(item);
};

exports.create = (req, res) => {
  const novo = { id: ++db.seq.cursos, ...req.body };
  db.cursos.push(novo);
  res.status(201).json(novo);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = db.cursos.findIndex(a => a.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Curso não encontrado' });
  db.cursos[idx] = { id, ...req.body };
  res.json(db.cursos[idx]);
};

exports.remove = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = db.cursos.findIndex(a => a.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Curso não encontrado' });
  const removed = db.cursos.splice(idx, 1)[0];
  res.json(removed);
};
