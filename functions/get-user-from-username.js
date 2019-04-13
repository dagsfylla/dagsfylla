import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
});
exports.handler = (event, context, callback) => {
    const data = JSON.parse(event.body);
    console.log(`in function get-user-from-username, username: ${data.username}`);
    return (
        client
            .query(
                q.If(
                    q.IsEmpty(q.Paginate(q.Match(q.Index('user_by_username'), data.username))),
                    q.Create(q.Class('users'), { data: { username: data.username } }),
                    q.Get(q.Match(q.Index('user_by_username'), data.username))
                )
            )
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
            })
    );
};
