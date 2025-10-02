const db = {
    seq: { alunos: 4, professores: 4, cursos: 4, turmas: 4, matriculas: 4 },
  
    alunos: [
      { id: 1, nome: 'Gustavo Simoes', email: 'gustavo@iesb.com', cpf: '12345678900', telefone: '(61) 94002-8922', dataNascimento: '2004-08-03' },
      { id: 2, nome: 'Gabriel Ataides', email: 'ataides@iesb.com', cpf: '99999999999', telefone: '(61) 91919-1919', dataNascimento: '2004-03-24' },
      { id: 3, nome: 'Denis', email: 'denis@iesb.com', cpf: '55555555555', telefone: '(61) 95151-5151', dataNascimento: '2004-12-31' },
      { id: 4, nome: 'Alex', email: 'alexandre@iesb.com', cpf: '6666666666', telefone: '(61) 95101-5151', dataNascimento: '2003-12-31' }
    ],
    
  
    professores: [
      { id: 1, nome: 'maria joaquina', email: 'maria.joaquina@escola.com', cpf: '12345678901', disciplina: 'Engenharia de Software', tempoCasa: 3 },
      { id: 2, nome: 'bruno pereira', email: 'bruno.pereira@escola.com', cpf: '98765410000', disciplina: 'História', tempoCasa: 1 },
      { id: 3, nome: 'josé bizerra', email: 'jose.bizerra@escola.com', cpf: '45678912377', disciplina: 'Programação', tempoCasa: 2 },
      { id: 4, nome: 'carlos miguel', email: 'carlos.miguel@escola.com', cpf: '9058912377', disciplina: 'ciencias de dados', tempoCasa: 4 }
    ],
  
    cursos: [
      { id: 1, nome: 'Engenharia de Software', cargaHoraria: 360, ativo: true },
      { id: 2, nome: 'História', cargaHoraria: 300, ativo: true },
      { id: 3, nome: 'Informática', cargaHoraria: 240, ativo: false },
      { id: 4, nome: 'ciencias de dados', cargaHoraria: 90, ativo: false }
    ],
  
    turmas: [
      { id: 1, cursoId: 1, semestre: '2025.1', turno: 'matutino', vagas: 30 },
      { id: 2, cursoId: 2, semestre: '2025.1', turno: 'vespertino', vagas: 25 },
      { id: 3, cursoId: 3, semestre: '2025.1', turno: 'noturno', vagas: 40 },
      { id: 4, cursoId: 4, semestre: '2025.1', turno: 'noturno', vagas: 40 }
    ],
  
    matriculas: [
      { id: 1, alunoId: 1, turmaId: 1, status: 'ativa', data: '2025-01-10' },
      { id: 2, alunoId: 2, turmaId: 3, status: 'trancada', data: '2025-03-05' },
      { id: 3, alunoId: 3, turmaId: 2, status: 'concluida', data: '2024-12-20' },
      { id: 4, alunoId: 4, turmaId: 4, status: 'concluida', data: '2024-12-20' }
    ]
  };
  
  module.exports = db;
  