const db = require('../Data/db');

exports.list = (req, res) => res.json(db.turmas);

exports.get = (req, res) => {
  const id = parseInt(req.params.id);
  const item = db.turmas.find(a => a.id === id);
  if (!item) return res.status(404).json({ error: 'Turma não encontrada' });
  res.json(item);
};

exports.create = (req, res) => {
  const novo = { id: ++db.seq.turmas, ...req.body };
  db.turmas.push(novo);
  res.status(201).json(novo);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = db.turmas.findIndex(a => a.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Turma não encontrada' });
  db.turmas[idx] = { id, ...req.body };
  res.json(db.turmas[idx]);
};

exports.remove = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = db.turmas.findIndex(a => a.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Turma não encontrada' });
  const removed = db.turmas.splice(idx, 1)[0];
  res.json(removed);
};
