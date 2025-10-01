const express = require('express');
const app = express();

app.use(express.json());

// Healthcheck
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok', at: new Date().toISOString() });
});

// Rotas
app.use('/api/v1/alunos', require('./SRC/Routes/alunos'));
app.use('/api/v1/professores', require('./SRC/Routes/professores'));
app.use('/api/v1/cursos', require('./SRC/Routes/cursos'));
app.use('/api/v1/turmas', require('./SRC/Routes/turmas'));
app.use('/api/v1/matriculas', require('./SRC/Routes/matriculas'));

// 404 padrão
app.use((req, res) => res.status(404).json({ error: 'Rota não encontrada' }));

// Handler de erro central
app.use(require('./SRC/Middlewares/errorHandler'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
