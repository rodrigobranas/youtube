import pgPromise from "pg-promise";

const pgp = pgPromise({});

const db = pgp({
	user: "postgres",
	password: "",
	host: "localhost",
	port: 5432,
	database: "app",
	idleTimeoutMillis: 100
})

export default db;
