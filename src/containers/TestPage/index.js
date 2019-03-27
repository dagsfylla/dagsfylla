import React from 'react';

class TestForm extends React.Component {
    state = {
        users: [],
    };
    // Function using fetch to POST to our API endpoint
    createUser = data => {
        return fetch('/.netlify/functions/create-user', {
            body: JSON.stringify(data),
            method: 'POST',
        }).then(response => {
            return response.json();
        });
    };

    handleCreateUser = () => {
        let user = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            age: this.age,
        };

        // create it!
        this.createUser(user)
            .then(response => {
                console.log('API response', response);
                // set app state
            })
            .catch(error => {
                console.log('API error', error);
            });
    };

    getUsers = () => {
        return fetch('/.netlify/functions/get-all-users', {
            method: 'POST',
        }).then(response => response.json())
    };

    handleGetUsers = () => {
        this.getUsers()
            .then(response => this.setState({ users: response }))
            .catch(error => {
                console.log('API error', error);
            });
    };

    render() {
        let { users } = this.state;

        console.log(users);

        return (
            <div>
                <p>Please insert info below</p>
                <table>
                    <thead>
                        <tr>
                            <th>Felt</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fornavn</td>
                            <td>
                                <input onChange={e => (this.firstName = e.currentTarget.value)} type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Etternavn</td>
                            <td>
                                <input onChange={e => (this.lastName = e.currentTarget.value)} type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Epost</td>
                            <td>
                                <input onChange={e => (this.email = e.currentTarget.value)} type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Alder</td>
                            <td>
                                <input onChange={e => (this.age = e.currentTarget.value)} type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={this.handleCreateUser}>Lag bruker</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>Do something</p>
                <button onClick={this.handleGetUsers}>Get users</button>
                { users.length ? users.map(user => <p key={user.ref['@ref']}>{user.data.firstName}</p>) : null}


            </div>
        );
    }
}

export default TestForm;
