const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (Arvosana,Paivays,idOpiskelija,idOpintojakso) values(?,?,?,?)',
      [arviointi.Arvosana, arviointi.Paivays, arviointi.idOpiskelija, arviointi.idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set Arvosana=?, Paivays=?, idOpiskelija=?, idOpintojakso=? where idArviointi=?',
      [arviointi.Arvosana, arviointi.Paivays, arviointi.idOpiskelija, arviointi.idOpintojakso, id],
      callback
    );
  }
};
module.exports = arviointi;