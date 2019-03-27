/* code from functions/todos-read-all.js */
const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
});

exports.handler = (event, context, callback) => {
    return client
        .query(q.Paginate(q.Match(q.Ref('indexes/all_users'))))
        .then(response => {
            const userRefs = response.data;
            const getAllUsersQuery = userRefs.map(ref => {
                return q.Get(ref);
            });
            // then query the refs
            return client.query(getAllUsersQuery).then(ret => {
                return callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(ret),
                });
            });
        })
        .catch(error => {
            console.log('error', error);
            return callback(null, {
                statusCode: 400,
                body: JSON.stringify(error),
            });
        });
};
