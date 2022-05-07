import styled from 'styled-components'

const Container = styled.div`
    background-color: rgb(247, 247, 247);
    padding: 2rem;
`

export const MainContainer = ({ children }: { children: React.ReactChildren }) => {
    return <Container>{children}</Container>;
};
