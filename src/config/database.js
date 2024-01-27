import { Pool } from 'pg';

// Database configuration with singleton pattern  to avoid multiples pool
class Database {
  static _instance;

  static get instance() {
    if (Database._instance === null) {
      Database._instance = new Database();
    }
    return Database._instance;
  }

  connection() {
    const pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });

    const query = (text, values) => {
      return new Promise((resolve, reject) => {
        pool
          .query(text, values)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    };

    return query;
  }
}

export default new Database().connection();
