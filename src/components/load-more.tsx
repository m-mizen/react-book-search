import React from 'react';
import styled from 'styled-components';

import { BookSearchContext } from '../context/book-search';
import { Button } from '../styled-components/buttons';

const LoadMoreEl = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem auto;
`

function LoadMore(props){
    return (
        <LoadMoreEl>
            <BookSearchContext.Consumer>
                { (value) => {
                    const {results, totalResults, loadMore} = value;
                    if (results?.length && results.length < totalResults) {
                        return (
                            <Button 
                                onClick={loadMore} 
                                type="button"
                            >Load More</Button>
                        );
                    }
                }}
            </BookSearchContext.Consumer>
        </LoadMoreEl>
    );
}

export default LoadMore;
