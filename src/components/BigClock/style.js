import styled from 'styled-components';

export const StyledClock = styled.div`
    li {
        display: inline-block;
        font-size: 1.5em;
        list-style-type: none;
        padding: 1em;
        text-transform: uppercase;
    }

    li span:not(.descriptor) {
        height: 60px;
        display: block;
        font-size: 8.5rem;
        text-align: center;
    }

    span {
        margin-top: 15px;
    }
`;
