import Api from '../../lib/api';
import extractData from '../../utils/extractData';

export function getUserByUsername(username) {
    return Api.fetch('get-user-from-username', { username });
}

export function getEventsForUser(userRef) {
    console.log(userRef);
    return Api.fetch('get-events-for-user', { userRef }).then(resp => resp.data.map(extractData));
}

export function updateEvent(eventRef, data) {
    return fetch(`/.netlify/functions/update-event/${eventRef}`, {
        method: 'POST',
        body: JSON.stringify({ data }),
    }).then(response => {
        return response.json();
    });
}

export function createEvent(data) {
    return Api.fetch('create-event', { data });
}

export function deleteEvent(eventRef) {
    return fetch(`/.netlify/functions/delete-event/${eventRef}`, {
        method: 'POST',
    }).then(response => {
        return response.json();
    });
}
