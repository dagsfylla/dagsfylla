import faunadb from 'faunadb';
import getId from './utils/getId';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
});

exports.handler = (event, context, callback) => {
    const data = JSON.parse(event.body);
    const eventRef = getId(event.path);
    console.log(`Function 'todo-update' invoked. update id: ${eventRef}`);
    return client
        .query(q.Update(q.Ref(`classes/user_events/${eventRef}`), data))
        .then(response => {
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify(response),
            });
        })
        .catch(error => {
            return callback(null, {
                statusCode: 400,
                body: JSON.stringify(error),
            });
        });
};
