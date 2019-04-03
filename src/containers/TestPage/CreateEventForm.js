import React from 'react';


class CreateEventForm extends React.Component {

    state = {
        time: "",
        name: "",
        location: "",
    };

    render() {
        return (
            <div>
                <label htmlFor="name">Name</label>
                <input id='name' type="text"/>
            </div>
        );
    }
}

export default CreateEventForm;