/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const creators = require('./data/creators.json')
const regularUser = require('./data/users.json')

exports.seed = async function(knex) {
 
  await knex('users').del()
  await knex('users').insert(regularUser);
  await knex('users').insert(creators);
  await knex.raw(`ALTER SEQUENCE users_id_seq RESTART WITH ${users.length + 1}`)
};
