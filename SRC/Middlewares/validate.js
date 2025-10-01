function requireJson(req, res, next) {
    if (!req.is('application/json')) {
      return res.status(415).json({ error: 'Content-Type deve ser application/json' });
    }
    next();
  }
  
  function validateAlunos(req, res, next) {
    const { nome, email, cpf, telefone, dataNascimento } = req.body;
    if (!nome || !email || !cpf || !telefone || !dataNascimento) {
      return res.status(400).json({ error: 'Campos obrigatórios: nome, email, cpf, telefone, dataNascimento' });
    }
    next();
  }
  
  function validateProfessores(req, res, next) {
    const { nome, email, cpf, disciplina, tempoCasa } = req.body;
    if (!nome || !email || !cpf || !disciplina || tempoCasa === undefined) {
      return res.status(400).json({ error: 'Campos obrigatórios: nome, email, cpf, disciplina, tempoCasa' });
    }
    next();
  }
  
  function validateCursos(req, res, next) {
    const { nome, cargaHoraria, ativo } = req.body;
    if (!nome || cargaHoraria === undefined || ativo === undefined) {
      return res.status(400).json({ error: 'Campos obrigatórios: nome, cargaHoraria, ativo' });
    }
    next();
  }
  
  function validateTurmas(req, res, next) {
    const { cursoId, semestre, turno, vagas } = req.body;
    if (cursoId === undefined || !semestre || !turno || vagas === undefined) {
      return res.status(400).json({ error: 'Campos obrigatórios: cursoId, semestre, turno, vagas' });
    }
    next();
  }
  
  function validateMatriculas(req, res, next) {
    const { alunoId, turmaId, status, data } = req.body;
    if (alunoId === undefined || turmaId === undefined || !status || !data) {
      return res.status(400).json({ error: 'Campos obrigatórios: alunoId, turmaId, status, data' });
    }
    next();
  }
  
  module.exports = {
    requireJson,
    validateAlunos,
    validateProfessores,
    validateCursos,
    validateTurmas,
    validateMatriculas
  };
  