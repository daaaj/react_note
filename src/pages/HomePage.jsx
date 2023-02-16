import styled from 'styled-components';
import * as S from '../style/shareStyle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoteList from '../components/NoteList';
import Button from '../components/elements/Button';
import CreateNote from '../components/CreateNote';
import { useRef } from 'react';

const GlobalStyle = S.GlobalStyle;

/* 재사용하기 */
const Apparea = styled(S.DivFlexCenter)`
    max-width: 1200px;
    height: auto;
    margin: 100px auto;
`;
const NoteArea = styled.div`
    background-color: #cbc8e3;
    border: 10px solid #cbc8e3;
    width: 500px;
    /* 높이 최소값 지정 */
    min-height: 400px;
    border-radius: 20px;
    position: relative;
`;

// header
const HeaderDiv = styled(S.DivFlexCenter)`
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px 10px;
`;
const NoteSpan = styled.span`
    font-size: 1.8em;
    font-weight: bold;
`;

function App() {
    const [btnText, setBtnText] = useState('Create');

    const createBtn = () => {
        btnText === 'Create' ? setBtnText('Done') : setBtnText('Create');
    };

    return (
        <>
            {/* 맨위에 작성하기 */}
            <GlobalStyle></GlobalStyle>
            <Apparea>
                <NoteArea>
                    <HeaderDiv>
                        <NoteSpan>I'm Note</NoteSpan>
                        <Button onClick={createBtn} display={btnText === 'Done' ? 'none' : ''}>
                            {btnText}
                        </Button>
                    </HeaderDiv>
                    {btnText === 'Done' ? <CreateNote setBtnText={setBtnText}></CreateNote> : <NoteList></NoteList>}
                </NoteArea>
            </Apparea>
        </>
    );
}

export default App;
