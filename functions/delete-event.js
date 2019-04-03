import faunadb from 'faunadb';
import getId from "./utils/getId";

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
});

exports.handler = (event, context, callback) => {
    const eventRef = getId(event.path);
    console.log(`Function 'todo-update' invoked. update id: ${eventRef}`);
    /* construct the fauna query */
    return client
        .query(q.Delete(q.Ref(q.Class('user_events'), eventRef)))
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