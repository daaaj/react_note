import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
`;
const NoteItem = styled.div`
    background-color: #f4f4f4;
`;

function NoteList({ list }) {
    return (
        <Container>
            <NoteItem>
                <span>{list.title}</span>
                <p>{list.content}</p>
            </NoteItem>
        </Container>
    );
}
export default NoteList;
