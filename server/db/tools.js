const knex = require("./knex");

function createTool(tool) {
  return knex("Tools").insert(tool)
}

function getTools() {
  return knex("Tools").select([
    'title',
    'pic',
    'isTaken',
    'notifType'
  ])
}

module.exports = {
  createTool,
  getTools,
}
