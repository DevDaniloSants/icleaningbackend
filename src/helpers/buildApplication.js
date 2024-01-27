const ncp = require('ncp');
const path = require('path');

const origin = process.argv[2];
const target = process.argv[3];

ncp(path.resolve(origin), path.resolve(target), (err) => {
  if (err) {
    console.error('Erro ao copiar a pasta:', err);
    return;
  }
  console.log('Pasta copiada com sucesso!');
});
