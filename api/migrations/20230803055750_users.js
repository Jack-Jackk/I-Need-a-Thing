/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('firstname', 50).unique().notNullable();
        table.string('lastname', 50).nullable()
        table.string('username', 50).nullable()
        table.string('email', 150).unique().notNullable();
        table.string('password', 72).notNullable();
        table.string('bio', 255).nullable();
        table.text("link").nullable();
        table.enu("role", ["admin", "user","creator"]).notNullable()
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
