import styled from 'styled-components';

const Container = styled.div`
    background-color: teal;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
`;
const NoteItem = styled.div`
    background-color: white;
`;

function NoteList() {
    return (
        <Container>
            <NoteItem>
                <span>title</span>
                <p>content</p>
            </NoteItem>
        </Container>
    );
}
export default NoteList;
