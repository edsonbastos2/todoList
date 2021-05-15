import styled from 'styled-components';


export const InputTarefa = styled.input`
    width: 400px;
    height: 50px;
    border: 2px solid #000;
    outline: none;
    font-size: 20px;
    font-family: sans-serif;
`;

export const  ItemList = styled.li`
    list-style: none;
    text-decoration: ${props => props.active ? 'line-through' : ''};
    font-family: sans-serif;
    font-size: 20px;
    cursor: pointer;
`;
