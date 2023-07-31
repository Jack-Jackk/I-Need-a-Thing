/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('firstname', 50).notNullable();
        table.string('lastname', 50).notNullable();
        table.string('username', 50).unique().notNullable();
        table.string('email', 75).unique().notNullable();
        table.string('password', 72).notNullable();
        table.string('bio', 255).nullable();
        table.string('link', 255).nullable();
        table.enu("role", ["admin", "user", "creator"]).nullable().defaultTo("user")
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
