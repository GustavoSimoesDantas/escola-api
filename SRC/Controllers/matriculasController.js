const db = require('../Data/db');

exports.list = (req, res) => res.json(db.matriculas);

exports.get = (req, res) => {
  const id = parseInt(req.params.id);
  const item = db.matriculas.find(a => a.id === id);
  if (!item) return res.status(404).json({ error: 'Matrícula não encontrada' });
  res.json(item);
};

exports.create = (req, res) => {
  const novo = { id: ++db.seq.matriculas, ...req.body };
  db.matriculas.push(novo);
  res.status(201).json(novo);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = db.matriculas.findIndex(a => a.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Matrícula não encontrada' });
  db.matriculas[idx] = { id, ...req.body };
  res.json(db.matriculas[idx]);
};

exports.remove = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = db.matriculas.findIndex(a => a.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Matrícula não encontrada' });
  const removed = db.matriculas.splice(idx, 1)[0];
  res.json(removed);
};
