import styled from "styled-components";

import { Card } from 'reactstrap';

export const StyledCard = styled(Card)`
    border-radius: 5px;
    border: 1px solid black;
    :hover {
        border: 1px solid #fff;
        background: #E8E8E8;
        cursor: pointer;
    }
`