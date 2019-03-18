import React from 'react';

class DetailView extends React.Component {
    render() {
        console.log('in detail page');
        let {
            match: {
                params
            },
            events,
        } = this.props;

        let event = events.find(({ id }) => id === parseInt(params.id));

        if (!event) {
            return <h3>No event found</h3>
        }

        return (
            <div>
                <h3>{event.name}</h3>
            </div>
        );
    }
}

export default DetailView;
