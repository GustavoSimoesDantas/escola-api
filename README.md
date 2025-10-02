# Escola API

API REST para gerenciamento de alunos, professores, cursos, turmas e matrículas de uma escola. Permite operações CRUD completas para cada entidade, facilitando o controle acadêmico.

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/GustavoSimoesDantas/escola-api.git
   cd escola-api
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute a API:
   ```bash
   npm start
   # ou para modo desenvolvimento
   npm run dev
   ```
4. Acesse: [http://localhost:3000/api/v1/health](http://localhost:3000/api/v1/health)

## Endpoints

### Alunos
- `GET /api/v1/alunos` — Lista todos os alunos
- `GET /api/v1/alunos/:id` — Busca aluno por ID
- `POST /api/v1/alunos` — Cria novo aluno
  ```json
  {
    "nome": "Lucas Lima",
    "email": "lucas.lima@example.com",
    "cpf": "11122233344",
    "telefone": "11911112222",
    "dataNascimento": "2001-01-01"
  }
  ```
- `PUT /api/v1/alunos/:id` — Atualiza aluno
- `DELETE /api/v1/alunos/:id` — Remove aluno

### Professores
- `GET /api/v1/professores`
- `GET /api/v1/professores/:id`
- `POST /api/v1/professores`
  ```json
  {
    "nome": "Pedro Lima",
    "email": "pedro.lima@example.com",
    "cpf": "22233344455",
    "disciplina": "Álgebra",
    "tempoCasa": 1
  }
  ```
- `PUT /api/v1/professores/:id`
- `DELETE /api/v1/professores/:id`

### Cursos
- `GET /api/v1/cursos`
- `GET /api/v1/cursos/:id`
- `POST /api/v1/cursos`
  ```json
  {
    "nome": "Álgebra",
    "cargaHoraria": 250,
    "ativo": true
  }
  ```
- `PUT /api/v1/cursos/:id`
- `DELETE /api/v1/cursos/:id`

### Turmas
- `GET /api/v1/turmas`
- `GET /api/v1/turmas/:id`
- `POST /api/v1/turmas`
  ```json
  {
    "cursoId": 4,
    "semestre": "2025.3",
    "turno": "matutino",
    "vagas": 15
  }
  ```
- `PUT /api/v1/turmas/:id`
- `DELETE /api/v1/turmas/:id`

### Matrículas
- `GET /api/v1/matriculas`
- `GET /api/v1/matriculas/:id`
- `POST /api/v1/matriculas`
  ```json
  {
    "alunoId": 5,
    "turmaId": 2,
    "status": "ativa",
    "data": "2025-12-09"
  }
  ```
- `PUT /api/v1/matriculas/:id`
- `DELETE /api/v1/matriculas/:id`

## Integrantes e Contribuições

- **Gustavo Simoes Dantas** ([GustavoSimoesDantas](https://github.com/GustavoSimoesDantas))
  - Estruturação do projeto, implementação dos controllers, rotas e banco de dados em memória.
- **Gabriel Ataides** ([ataides-cell](https://github.com/ataides-cell))
  - Colaboração na criação das rotas, exemplos de requisição e revisão da documentação.
- **Denys** ([denyswenceslau1](https://github.com/denyswenceslau1))
  - Apoio na modelagem dos dados, revisão de código e testes de integração.
- **Alexandre** ([Alexiesb](https://github.com/Alexiesb))
  - Implementação dos middlewares de validação e tratamento de erros, testes das rotas e documentação.

