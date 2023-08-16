exports.up = knex => knex.schema.createTable('dishes', table => {
    table.increments('id')
    
    table.text('name').notNullable()
    table.text('description')
    table.text('categorize')
    table.integer('price')

    
})
   
  exports.down = knex => knex.schema.dropTable('dishes')