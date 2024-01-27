const fs = require('fs');
const path = require('path');
const { default: query } = require('../config/database');

// Generic executation query to avoid repetition
export const runMigration = async () => {
  try {
    const migrationFilePath = path.join(
      __dirname,
      '../database/migrations/create_table_customer.sql',
    );

    const migrationSql = fs.readFileSync(migrationFilePath, 'utf-8');
    await query(migrationSql);
    console.log('Migration rodando com sucesso');
  } catch (error) {
    console.log(error);
  }
};

export const execQuery = async (queryPath, args = []) => {
  try {
    const migrationFilePath = path.join(
      __dirname,
      `../database/queries/${queryPath}`,
    );

    const migrationSql = fs.readFileSync(migrationFilePath, 'utf-8');
    console.log(migrationSql);
    console.log(args);

    const dynamicQuery = {
      text: migrationSql,
      values: args,
    };
    console.log(dynamicQuery + 'dynamic');

    const result = await query(dynamicQuery);

    console.log(`query ${migrationSql} executada com sucesso`);

    return result;
  } catch (error) {
    console.log(error);
  }
};
