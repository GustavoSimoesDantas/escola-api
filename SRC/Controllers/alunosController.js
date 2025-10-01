const db = require('../Data/db');

exports.list = (req, res) => res.json(db.alunos);

exports.get = (req, res) => {
  const id = parseInt(req.params.id);
  const item = db.alunos.find(a => a.id === id);
  if (!item) return res.status(404).json({ error: 'Aluno não encontrado' });
  res.json(item);
};

exports.create = (req, res) => {
  const novo = { id: ++db.seq.alunos, ...req.body };
  db.alunos.push(novo);
  res.status(201).json(novo);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = db.alunos.findIndex(a => a.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Aluno não encontrado' });
  db.alunos[idx] = { id, ...req.body };
  res.json(db.alunos[idx]);
};

exports.remove = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = db.alunos.findIndex(a => a.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Aluno não encontrado' });
  const removed = db.alunos.splice(idx, 1)[0];
  res.json(removed);
};