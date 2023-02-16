import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    gap: 20px;
`;
const NoteItem = styled.div`
    background-color: #f4f4f4;
    /* padding: 20px; */
    border-radius: 20px;
    width: 100%;
`;
const Title = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    margin: 20px;
`;
const Content = styled.p`
    font-size: 0.9em;
    margin: 20px;
    // 영문 공백없이 작성해도 줄바꿈
    word-break: break-all;
`;

function NoteList() {
    // 리스트 가져오기
    const memoReducer = useSelector((state) => state.memoReducer);

    return (
        <Container>
            {memoReducer.map((memo) => {
                return (
                    <NoteItem key={memo.id}>
                        <Title>{memo.title}</Title>
                        <Content>{memo.content}</Content>
                    </NoteItem>
                );
            })}
        </Container>
    );
}
export default NoteList;
