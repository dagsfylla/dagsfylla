import React from 'react';

class DetailView extends React.Component {
    render() {
        console.log('in detail page');
        let {match} = this.props;
        return (match.params);
    }
}

export default DetailView;
