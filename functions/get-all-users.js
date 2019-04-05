/* code from functions/todos-read-all.js */
import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
});

exports.handler = (event, context, callback) => {
    console.log('in function');
    return client
        .query(q.Map(q.Paginate(q.Match(q.Ref('indexes/all_users'))), q.Lambda('ref', q.Get(q.Var('ref')))))
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
