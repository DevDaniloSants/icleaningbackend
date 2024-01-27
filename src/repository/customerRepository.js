// helpers
import { execQuery, runMigration } from '../helpers/sql.helper';

// Logic to persist and retrieve information from database
class CustomerRepository {
  async init() {
    await runMigration();
  }

  async save(name, email, phone, lat_x, long_y) {
    await execQuery('save_customer.sql', [name, email, phone, lat_x, long_y]);
  }

  async findAll() {
    const { rows } = await execQuery('find_all_customer.sql');

    return rows;
  }

  async findByEmail(email) {
    const { rows } = await execQuery('find_by_email_customer.sql', [email]);

    let result;

    if (rows.length !== 0) {
      result = rows[0];
    }

    return result;
  }
}

export default new CustomerRepository();
