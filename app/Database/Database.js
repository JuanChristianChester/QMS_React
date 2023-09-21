const mysql = require('mysql2/promise')

class Database {
  constructor (config = {}) {
    this.config = {
      host: config.host || 'mariadb',
      user: config.user || 'root',
      password: config.password || 'root',
      database: config.database || 'SATDB',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      ...config
    }

    this.pool = mysql.createPool(this.config)
  }

  async selectAll (tableName) {
    if (!this.isValidTableName(tableName)) {
      throw new Error('Invalid table name')
    }

    const query = `SELECT * FROM ${tableName}`
    try {
      let results = await this.executeQuery(query)
      results = JSON.parse(JSON.stringify(results))
      return results
    } catch (error) {
      console.error('Error in SELECT query:', error)
      return []
    }
  }

  async isValidTableName (tableName) {
    // Implement your own validation logic here.
    // For example, you can check if tableName only contains alphanumeric characters and underscores.
    const validTableNameRegex = /^[A-Za-z0-9_]+$/
    return validTableNameRegex.test(tableName)
  }

  async executeQuery (query, params) {
    try {
      const [results] = await this.pool.query(query, params)
      return results
    } catch (error) {
      console.error('Query error:', error)
      throw error
    }
  }

  async close () {
    try {
      await this.pool.end()
      console.log('Connection pool closed.')
    } catch (error) {
      console.error('Error closing connection pool:', error)
    }
  }
}

module.exports = Database
