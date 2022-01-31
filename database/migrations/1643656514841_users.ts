import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Database from '@ioc:Adonis/Lucid/Database'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('pseudo')
      table.string('email')
      table.integer('age')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

Database.insertQuery()
Database.table('users').insert({
  pseudo: 'JyjyStudio',
  email: 'jyjy@studio.com',
  age: 31,
})
