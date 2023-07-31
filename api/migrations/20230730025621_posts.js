/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('posts', function(table) {
        table.increments('id').primary();
        table.integer('userId').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.string('title', 80).notNullable();
        table.text('description').notNullable();
        table.enu("role", ["request", "service"]).notNullable();
        table.boolean('canDesign').nullable();
        table.boolean('isDesignRequired').nullable();
        table.string('designUrl', 255).nullable();
        table.datetime('timeframe').nullable();
        table.integer("quantity").nullable();
        table.string('country', 75).notNullable();
        table.integer("maxHeight").nullable();
        table.integer("maxWidth").nullable();
        table.integer("maxDepth").nullable();
        table.integer("maxPrecision").nullable();
        table.datetime('createdAt').notNullable();
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts')
};
