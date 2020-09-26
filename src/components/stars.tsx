import React from 'react';
import styled from 'styled-components';

type StarsWrapProps = {
    rated: boolean
};

const StarsWrap = styled.div<StarsWrapProps>`
    position: relative;
    width: 9ch;
    text-align: center;
    height: 1.5rem;
    color: gold;
    span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }
    ${
        props => props.rated ? 
            '' : 'color: var(--color-border)'
    }
`;

function Stars(props) {

    const rated = !(!props.rating && props.rating !== 0);
    const percent = rated ?
        `${(props.rating / 5) * 100}%`:
        '0';
    const ratingStyles = {
        'clipPath': `polygon(0 0, ${percent} 0, ${percent} 100%, 0 100%)`
    }
    const titleText = rated ? `${props.rating} stars` : 'No rating available';
    
    return (
        <div title={titleText}>
            <StarsWrap role="presentation" rated={rated}>
                <span>☆ ☆ ☆ ☆ ☆</span>
                <span style={ratingStyles}>★ ★ ★ ★ ★</span>
            </StarsWrap>
        </div>
    );
}

export default Stars;