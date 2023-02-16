import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from './elements/Button';
import App from '../pages/HomePage';

const Container = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;

    > button {
        position: absolute;
        top: 52px;
        right: 10px;
        user-select: none;
    }
`;

const Text = styled.input`
    border-radius: 15px;
    border: 1px solid #433986;
    &:focus {
        outline: 3px solid #433986;
    }
`;

const TitleInput = styled(Text)`
    height: 50px;
    margin-bottom: 10px;
    padding: 0px 10px;
`;

const ContentText = styled(Text.withComponent('textarea'))`
    height: 180px;
    resize: none;
    padding: 10px;
    margin-bottom: 20px;
`;

function CreateNote({ setBtnText }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const titleChange = (e) => {
        setTitle(e.target.value);
    };
    const contentChange = (e) => {
        setContent(e.target.value);
    };

    // console.log(btnText);
    //const [btnText, setBtnText] = useState('Create');

    // const createBtn = () => {
    //     btnText === 'Create' ? setBtnText('Done') : setBtnText('Create');
    // };

    // const submitNote = (e) => {
    //     e.preventDefault();
    //     document.addEventListener('submit', () => {
    //         console.log('dd');
    //     });
    //     console.log(title, content);
    // };

    const dd = () => {
        setBtnText('Create');
        console.log('dd');
    };

    return (
        <Container>
            <Button onClick={dd}>Done</Button>
            <TitleInput placeholder="note title" onChange={titleChange} value={title}></TitleInput>
            <ContentText placeholder="Enter note text" onChange={contentChange} value={content}></ContentText>
        </Container>
    );
}

export default CreateNote;
