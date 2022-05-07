import styled from 'styled-components'

const CompContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    @media only screen and (max-width: 520px) {
        grid-template-columns: 1fr;
        place-items: center;
    }
`

export const Header = ({ children }: { children: React.ReactChildren }) => {
  return <CompContainer>{children}</CompContainer>;
};
