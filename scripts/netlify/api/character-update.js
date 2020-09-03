const successResponse = require('./utils/successResponse')
const failureResponse = require('./utils/failureResponse')
const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })

const characterUpdateQuery = (event) => {
	return q.Update(
		q.Ref(`character/UpdateCharacter`),
		{ data: { user: event.body.user, character: event.body.character } }
	)
}

exports.handler = async (event) => {
	return client.query(characterUpdateQuery(event))
		.then(res => successResponse(res))
		.catch(err => failureResponse(err))
}