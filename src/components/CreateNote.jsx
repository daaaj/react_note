import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
`;

const Text = styled.input`
    border-radius: 15px;
    border: 1px solid #433986;
    font-family: 'UhBeeSeulvely';
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
`;

function CreateNote({ title, setTitle, content, setContent }) {
    const titleChange = (e) => {
        setTitle(e.target.value);
    };
    const contentChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <Container>
            <TitleInput placeholder="note title" onChange={titleChange} value={title}></TitleInput>
            <ContentText placeholder="Enter note text" onChange={contentChange} value={content}></ContentText>
        </Container>
    );
}
export default CreateNote;
