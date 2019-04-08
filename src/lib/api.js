export default class Api {

    static BASE_URL = '/.netlify/functions/';

    static fetch(url, data) {
        return fetch(Api.BASE_URL + url, {
            method: 'POST',
            body: JSON.stringify(data),
        }).then(response => response.json());

    }

}