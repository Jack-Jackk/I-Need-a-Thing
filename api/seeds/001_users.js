/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const creators = require('./data/creators.json')
const regularUser = require('./data/users.json')
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert(regularUser);
  await knex('users').insert(creators);
  await knex.raw(`ALTER SEQUENCE users_id_seq RESTART WITH 41`)
};
