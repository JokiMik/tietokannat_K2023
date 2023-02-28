const db = require('../database');

const opiskelija = {
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opiskelija where idOpiskelija=?', [id], callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (Etunimi,Sukunimi,Opiskelijanumero,Luokkatunnus,Osoite) values(?,?,?,?,?)',
      [opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.Opiskelijanumero, opiskelija.Luokkatunnus, opiskelija.Osoite],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where idOpiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set Etunimi=?,Sukunimi=?, Opiskelijanumero=?, Luokkatunnus=?, Osoite=? where idOpiskelija=?',
      [opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.Opiskelijanumero, opiskelija.Luokkatunnus, opiskelija.Osoite, id],
      callback
    );
  }
};
module.exports = opiskelija;