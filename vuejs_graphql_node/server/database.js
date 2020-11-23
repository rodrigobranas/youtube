const poolConfig = {
	user: "postgres",
	database: "devbage",
	password: "",
	host: "localhost",
	port: 5432,
	max: 10,
	idleTimeoutMillis: 30000
};

const pgp = require("pg-promise")({});

pgp.pg.types.setTypeParser(1700, (value) => {
	return parseFloat(value);
});

pgp.pg.defaults.poolSize = 5;

module.exports = pgp(poolConfig);
