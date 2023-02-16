import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    background-color: white;
    width: 80px;
    height: 35px;
    font-size: 0.9em;
    border: none;
    border-radius: 10px;
    display: ${(props) => props.display};
    cursor: pointer;
`;

function Button({ onClick, display, children }) {
    return (
        <Btn onClick={onClick} display={display}>
            {children}
        </Btn>
    );
}

export default Button;
