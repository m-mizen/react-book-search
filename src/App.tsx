import React from 'react';
import styled from 'styled-components';

// Context
import { BookSearchContextProvider } from './context/book-search';

// Components
import Footer  from './components/footer';
import SearchBar from './components/search-bar';
import SearchResults from './components/search-results';

// Styled components
import { Container, FlexContainer } from './styled-components/containers';

const Main = styled(FlexContainer)`
  justify-content: flex-start;
  align-items: center;
`;

const H1 = styled.h1`
  font-family: var(--font-family-title);
`;

const AppBody = styled.div`
  padding-top: 2rem;
  display:flex;
  flex-direction: column;
  height: 100vh;
  > .main {
      flex: 1 1 auto;
  }
  > footer {
      flex: 0 0 auto;
  }
`;

function App() {

  return (
    <AppBody>
      <Main className="main" vertical>
        <BookSearchContextProvider>
          <Container>
            <H1>Google Books Search</H1>
            <SearchBar />
          </Container>
          <SearchResults />
        </BookSearchContextProvider>
      </Main>
      <Footer />
    </AppBody>
  );
}

export default App;
