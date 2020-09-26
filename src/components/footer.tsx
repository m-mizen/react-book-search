import React from 'react';
import styled from 'styled-components';

import { Container } from '../styled-components/containers';

const FooterContainer = styled.div`
    text-align: center;
    background: rgba(255,255,255, 0.1);
    padding: 1rem 0 1.5rem;
`

function Footer() {
    return (
        <FooterContainer>
            <Container>
                <p>
                    &copy;Mark Mizen {(new Date()).getFullYear()}.
                    Powered by <a href="https://developers.google.com/books" rel="noopener noreferrer" target="_blank">Google Books API</a>.
                </p>
            </Container>
        </FooterContainer>
    )
}


export default Footer;