import React from 'react';
import styled from 'styled-components';
import Stars from './stars';

const Tile = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;
`;

const BookTitle = styled.h2`
    margin: 0;
    font-size: 1rem;
    font-family: var(--font-family-title, inherit);
`;

const BookSubTitle = styled.p`
    margin: 0;
    font-size : 85%;
    text-transform: uppercase;
`;

const BookThumbnail = styled.img`
    margin-top: auto;
    height: 192px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    object-fit-position: bottom;
`


function BookTile({book}) {

    const {title, subtitle, averageRating, ratingsCount, imageLinks} = book.volumeInfo;
    const thumbnail = imageLinks?.thumbnail || null;

    return (
        <Tile>
            <BookTitle>{ title }</BookTitle>
            <BookSubTitle>{ subtitle }</BookSubTitle>
            { thumbnail && <BookThumbnail src={thumbnail} alt={`Book Cover for ${title}`}/> }
            <Stars rating={averageRating} ratings={ratingsCount}/>
        </Tile>
    )
}

export default BookTile;