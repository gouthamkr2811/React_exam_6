import React from 'react';
import styled from 'styled-components';

function TransationNotWorking() {
    return (
        <CDM> Transation Not Working  !!!</CDM>
    )
}

const CDM = styled.h1`
    font-size: 40px;
    color: red;
    text-align: center;
    font-weight: bold;
    padding-top: 20%;
`;

export default TransationNotWorking;