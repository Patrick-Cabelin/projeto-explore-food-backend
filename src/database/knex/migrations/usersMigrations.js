exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id')
    
    table.text('name')
    table.text('email').notNullable()
    table.text('password')
    table.bool('admin')
    
})
   
  exports.down = knex => knex.schema.dropTable('users')