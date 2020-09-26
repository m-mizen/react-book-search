import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 54rem;
    padding: 0 1rem;
    width: 100%;
`;

type ContainerProps = {
    vertical?: boolean;
}

export const FlexContainer = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${props => props.vertical ? "column" : "row"};
    gap: 1rem;
`

export const GridContainer = styled.div`
    display: grid;
    gap: 1rem;
`