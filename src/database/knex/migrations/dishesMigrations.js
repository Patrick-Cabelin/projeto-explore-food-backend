exports.up = knex => knex.schema.createTable('dishes', table => {
    table.increments('id')
    
    table.text('name').notNullable()
    table.text('description')
    table.text('category')
    table.text('image_of_dish')
    table.integer('price')

    
})
   
  exports.down = knex => knex.schema.dropTable('dishes')