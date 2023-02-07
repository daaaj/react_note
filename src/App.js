import React from 'react';
import NoteList from './components/NoteList';
import styled, { createGlobalStyle } from 'styled-components';

// injectGlobal 말고 이걸로~
const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin: 0;
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
    background-color: pink;
    max-width: 1200px;
    height: 100vh;
    margin: 0px auto;
`;
const NoteArea = styled.div`
    background-color: lightblue;
    width: 500px;
    height: 400px;

    border-radius: 20px;
`;
const Header = styled(DivFlexCenter)`
    background-color: wheat;
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
`;
const NoteSpan = styled.span`
    font-size: 1.5em;
    font-weight: bold;
`;
const CreateBtn = styled.button`
    background-color: white;
    width: 80px;
    height: 30px;

    font-size: 1em;
    border: none;
    border-radius: 10px;
`;
function App() {
    return (
        <>
            {/* 맨위에 작성하기 */}
            <GlobalStyle></GlobalStyle>
            <Apparea>
                <NoteArea>
                    <Header>
                        <NoteSpan>Note</NoteSpan>
                        <CreateBtn>작성</CreateBtn>
                    </Header>
                    <NoteList />
                </NoteArea>
            </Apparea>
        </>
    );
}

export default App;
