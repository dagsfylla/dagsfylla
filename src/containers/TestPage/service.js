export function getUserByUsername(username) {
    return fetch('/.netlify/functions/get-user-from-username', {
        method: 'POST',
        body: JSON.stringify({ username }),
    }).then(response => response.json());
}

export function getEventsForUser(userRef) {
    return fetch('/.netlify/functions/get-events-for-user', {
        method: 'POST',
        body: JSON.stringify({ userRef }),
    }).then(response => {
        return response.json();
    });
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
    return fetch('/.netlify/functions/create-event', {
        method: 'POST',
        body: JSON.stringify({ data }),
    }).then(response => {
        return response.json();
    });
}

export function deleteEvent(eventRef) {
    return fetch(`/.netlify/functions/delete-event/${eventRef}`, {
        method: 'POST',
    }).then(response => {
        return response.json();
    });
}
