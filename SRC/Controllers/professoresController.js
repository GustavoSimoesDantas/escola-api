const db = require('../Data/db');

exports.list = (req, res) => res.json(db.professores);

exports.get = (req, res) => {
  const id = parseInt(req.params.id);
  const item = db.professores.find(a => a.id === id);
  if (!item) return res.status(404).json({ error: 'Professor não encontrado' });
  res.json(item);
};

exports.create = (req, res) => {
  const novo = { id: ++db.seq.professores, ...req.body };
  db.professores.push(novo);
  res.status(201).json(novo);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = db.professores.findIndex(a => a.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Professor não encontrado' });
  db.professores[idx] = { id, ...req.body };
  res.json(db.professores[idx]);
};

exports.remove = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = db.professores.findIndex(a => a.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Professor não encontrado' });
  const removed = db.professores.splice(idx, 1)[0];
  res.json(removed);
};