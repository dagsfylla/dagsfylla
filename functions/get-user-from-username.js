import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
});
// If(IsEmpty(Paginate(Match(Index('user_by_username'), 'noe'))), Create(Class('users'), {'data': {"username": "noe"}}), Get(Match(Index('user_by_username'), 'noe')))
exports.handler = (event, context, callback) => {
    console.log('in function get-user-from-username');
    const data = JSON.parse(event.body);
    console.log('data', data);
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
