import styled from 'styled-components'

const CompContainer = styled.div`
    max-width: 260px;
    text-align: center;
`

const Message = styled.h1`
    margin-bottom: 2rem;
`

export const Error = ({ errorMessage, children }: { errorMessage: string; children: React.ReactChildren }) => {
    return (
        <CompContainer>
            <Message> { errorMessage } </Message>
            {children}
        </CompContainer>
    );
};
