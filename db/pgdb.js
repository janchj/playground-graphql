module.exports = pgPool => ({
  getSpirit(spiritId) {
    return pgPool.query(
      'SELECT spiritid, spiritname FROM spirits WHERE spiritid = $1',
      [spiritId]
    ).then(res => res.rows[0]);
  }
});

