import * as Service from '../containers/UserPage/service';
import getRef from './getRef';

export default function getUserIfAbsent(username) {
    let storageUser = localStorage.getItem('user');
    if (!storageUser || JSON.parse(storageUser).username !== username) {
        return Service.getUserByUsername(username).then(user => {
            let ref = getRef(user);
            localStorage.setItem('user', JSON.stringify({ ref, username: user.data.username }));
            return ref;
        });
    } else {
        return Promise.resolve(JSON.parse(storageUser).ref);
    }
}
