import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
});

exports.handler = (event, context, callback) => {
    const data = JSON.parse(event.body);
    console.log('Function `create-event` invoked', data);
    /* construct the fauna query */
    return client
        .query(q.Create(q.Class('user_events'), data))
        .then(response => {
            console.log('success', response);
            /* Success! return the response with statusCode 200 */
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify(response),
            });
        })
        .catch(error => {
            console.log('error', error);
            /* Error! return the error with statusCode 400 */
            return callback(null, {
                statusCode: 400,
                body: JSON.stringify(error),
            });
        });
};