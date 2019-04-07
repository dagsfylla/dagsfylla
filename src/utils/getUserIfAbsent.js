import * as Service from '../containers/UserPage/service';
import getRef from './getRef';

export default function getUserIfAbsent(username) {
    if (!(localStorage.getItem('user') || JSON.parse(localStorage.getItem('user')).username !== username)) {
        Service.getUserByUsername(username).then(user =>
            localStorage.setItem('user', JSON.stringify({ ref: getRef(user), username: user.data.username }))
        );
    }
}