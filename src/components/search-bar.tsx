import React, { useState } from 'react';
import styled from 'styled-components';

import { BookSearchContext } from '../context/book-search';

import { Input } from '../styled-components/inputs';
import { Button } from '../styled-components/buttons';
import { FlexContainer } from '../styled-components/containers';

let _unique = 0;

const Form = styled.form`
    font-size: 125%;
    input {
        flex: 1;
        width: 100%;
        display: block;
    }
`;

const Label = styled.label`
    display: block;
    margin-bottom: .25rem;
    font-size: 1rem;
    text-align: left;
`

function SearchBar(props) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>, search: any) => {
        event.preventDefault();
        search(searchTerm);
    };

    const id = `search-${_unique++}`;

    const clear = (event, search) => {
        event.preventDefault();
        setSearchTerm('');
        search('');
    }

    const mobile = window.innerWidth < 400;

    return (
        <BookSearchContext.Consumer>
            {({ search }) => {
                return <Form 
                    onSubmit={(e) => handleSubmit(e, search)}
                >
                    <Label htmlFor={id}>Search term:</Label>
                    <FlexContainer vertical={mobile}>
                        <Input
                            id={id}
                            type="text"
                            value={searchTerm}
                            onChange={event => setSearchTerm(event.target.value)}
                        />
                        <Button type="submit">Search</Button>
                        <Button type="reset" onClick={event => clear(event, search)}>Clear</Button>
                    </FlexContainer>
                </Form>
            }}
        </BookSearchContext.Consumer>
    );
}

export default SearchBar;