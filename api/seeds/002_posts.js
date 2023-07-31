/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const mockPostsData = require('./data/mockPostsData.json')
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert(mockPostsData);
  // Correct the incrementing id to prevent conflict
  // await knex.raw(`ALTER SEQUENCE reports_id_seq RESTART WITH ${mockPostsData.length + 1}`)
};
