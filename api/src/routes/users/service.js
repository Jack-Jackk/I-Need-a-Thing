const knex = require("../../knex.js");


exports.findAll = async () => {
  const results = await knex("users").select("*");

  return results;
};