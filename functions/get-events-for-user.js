import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
});

exports.handler = (event, context, callback) => {
    console.log('in function get events for user');
    const data = JSON.parse(event.body);
    console.log('data', data);
    return client
        .query(
            q.Map(
                q.Paginate(q.Match(q.Index('events_by_owner'), data.userRef)),
                q.Lambda(['starttime', 'ref'], q.Get(q.Ref(q.Class('user_events'), q.Var('ref'))))
            )
        )
        .then(response => {
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify(response),
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
