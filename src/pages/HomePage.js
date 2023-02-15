import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import NoteList from '../components/NoteList';
import CreateNote from '../components/CreateNote';

// injectGlobal 말고 이걸로~
const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin: 0;
    background-color: #f4f4f4;
    @font-face {
        font-family: 'UhBeeSeulvely';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSeulvely.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'UhBeeSeulvely';
  }
`;
const DivFlexCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
/* 재사용하기 */
const Apparea = styled(DivFlexCenter)`
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
`;
const Header = styled(DivFlexCenter)`
    height: 80px;
    flex-direction: row;
    justify-content: space-between;

    margin: 20px 10px;
`;
const NoteSpan = styled.span`
    font-size: 1.8em;
    font-weight: bold;
`;
const CreateBtn = styled.button`
    background-color: white;
    width: 80px;
    height: 35px;

    font-size: 0.9em;
    border: none;
    border-radius: 10px;
    font-family: 'UhBeeSeulvely';
`;
function App() {
    const [noteList, setNoteList] = useState([
        {
            id: 1,
            title: '아악',
            content: '아아아악',
        },
        {
            id: 2,
            title: '으으응?',
            content: '에에에엥?',
        },
    ]);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [btnText, setBtnText] = useState('Create');

    // 버튼 클릭시
    const createBtn = () => {
        if (btnText == 'Create') {
            setBtnText('Done');
            setTitle('');
            setContent('');
        } else if (btnText == 'Done') {
            if (title != '' && content != '') {
                setBtnText('Create');
                addNewNote();
            } else {
                // 뒤로 돌아가기
                setBtnText('Create');
            }
        }
    };
    const addNewNote = () => {
        const newNote = {
            id: Date.now(),
            title,
            content,
        };
        setNoteList([...noteList, newNote]);
    };

    return (
        <>
            {/* 맨위에 작성하기 */}
            <GlobalStyle></GlobalStyle>
            <Apparea>
                <NoteArea>
                    <Header>
                        <NoteSpan>I'm Note</NoteSpan>
                        <CreateBtn onClick={createBtn}>{btnText}</CreateBtn>
                    </Header>
                    {btnText == 'Done' ? (
                        <CreateNote setNoteList={setNoteList} list={noteList} onClick={createBtn} title={title} setTitle={setTitle} content={content} setContent={setContent}></CreateNote>
                    ) : (
                        noteList.map((list) => {
                            return <NoteList key={list.id} list={list}></NoteList>;
                        })
                    )}
                </NoteArea>
            </Apparea>
        </>
    );
}

export default App;