import styled from 'styled-components';

import { CardBody } from 'reactstrap';

export const CardBodyScroll = styled(CardBody)`
    overflow-y: scroll;
`;

export const StyledCardBody = styled(CardBody)`
    border-radius: 5px;
    border: 1px solid black;
    :hover {
        border: 1px solid #fff;
        background: #e8e8e8;
        cursor: pointer;
    }
`;
