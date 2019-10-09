const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
}

function find() {
 return db('schemes')
}

function findById(id) {
  return db('schemes').where({id:id})
          .then(schemes => schemes[0]);
}

function findSteps(scheme_id) {
  return db('steps as s')
          .where({scheme_id:scheme_id})
          .join('schemes as sc', 's.scheme_id','sc.id')
          .select('s.id','s.step_number','s.instructions','sc.scheme_name')
          .orderBy('step_number');
}

function add(scheme) {
  return db('schemes')
          .insert(scheme)
}

function update(scheme, id) {
  return db('schemes')
          .where({id: id}).update(scheme)
}

function remove(id) {
  return db('schemes')
          .where({id: id}).del()
  
}