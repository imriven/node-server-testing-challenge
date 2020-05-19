
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('password', 128)
        .notNullable();
        tbl.string('username', 128)
        .notNullable();
        tbl.string('nickname', 128)
        tbl.string('age', 128)
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
};
