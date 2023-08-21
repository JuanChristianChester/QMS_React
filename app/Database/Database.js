const mysql = require('mysql2/promise');

class Database {
  constructor(config = {}) {
    this.config = {
      host: config.host || 'mariadb',
      user: config.user || 'root',
      password: config.password || 'root',
      database: config.database || 'SATDB',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      ...config
    };

    this.pool = mysql.createPool(this.config);
  }

  async executeQuery(query, params) {
    try {
      const [results, fields] = await this.pool.query(query, params);
      return results;
    } catch (error) {
      console.error('Query error:', error);
      throw error;
    }
  }

  async close() {
    try {
      await this.pool.end();
      console.log('Connection pool closed.');
    } catch (error) {
      console.error('Error closing connection pool:', error);
    }
  }
}

module.exports = Database;
