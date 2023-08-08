/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const requests = require('./data/requests.json')
const services = require('./data/services.json')
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert(services);
  await knex('posts').insert(requests);
  await knex.raw(`ALTER SEQUENCE posts_id_seq RESTART WITH 50`)
};
