module.exports = {
	database: process.env.database || 'loopjam',
	username: process.env.username || 'postgres',
	password: process.env.password || '',
	host: process.env.host || 'localhost',
	port: 5432,
	dialect: 'postgres'
};