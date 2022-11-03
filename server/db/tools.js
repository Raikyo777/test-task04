const knex = require("./knex");

// function createTool(tool) {
//   return knex("Tools").insert(tool)
// }

function getTools() {
  return knex("Tools").select([
    'id',
    'title',
    'pic',
    'isTaken',
    'notifType',
  ])
}

function getTool(id) {
  console.log(id)
  return knex("Tools").select([
    'id',
    'title',
    'pic',
    'isTaken',
    'notifType',
    'code',
    'serial_number'
  ]).where('id', id)
}

function getUsage(id) {
  console.log(id)
  return knex("Usage").select([
    'id',
    'start_date',
    'usage',
    'result',
    'username',
    'type'
  ]).where('id', id)
}

module.exports = {
  // createTool,
  getTools,
  getTool,
  getUsage
}
