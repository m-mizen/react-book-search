import React from 'react';
import styled from 'styled-components';

import { BookSearchContext } from '../context/book-search';

import BookTile from './book-tile';
import LoadMore from './load-more';

const Container = styled.div`
    width: 100%;
    padding: 1rem 5%;
    max-width: 110rem;
`;

const BookTiles = styled.div`
    margin: 2rem 0 0;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
    gap: 1rem;
    text-align: center;
`;

const ResultsText = styled.div`
    text-align: center;
`;
const NoResultsText = styled.div`
    font-size: 80%;
    text-align: center;
    font-style: italic;
`;

function SearchResults(props) {

    const listResults = books => {
        return books?.map((book,index) => <BookTile key={index} book={book} />);
    }

    return (
        <Container>
            <BookSearchContext.Consumer>
                { ({results, totalResults}) => {
                    if (results?.length > 0) {
                        return (
                            <div>
                                <ResultsText>Showing: {results.length} of {totalResults}</ResultsText>
                                <BookTiles>
                                    { listResults(results) }
                                </BookTiles>
                                <LoadMore />
                            </div>
                        )
                    }  else {
                        return <NoResultsText>Nothing to display</NoResultsText>;
                    }
                }}
            </BookSearchContext.Consumer>
        </Container>
    );
}

export default SearchResults;