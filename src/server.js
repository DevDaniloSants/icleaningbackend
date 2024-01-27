import app from './app';

// Utilizando o dontenv
const port = process.env.PORT;

// application runner
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
