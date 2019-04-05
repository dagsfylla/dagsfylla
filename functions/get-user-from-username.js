import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
});

exports.handler = (event, context, callback) => {
    console.log('in function get-user-from-username');
    const data = JSON.parse(event.body);
    return client
        .query(q.Get(q.Match(q.Index('user_by_username'), data.username)))
        .then(ret => {
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify(ret),
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
