import styled from 'styled-components';

type ButtonProps = {
    disabled?: boolean;
    size?: 'small' | 'default' | 'large';
}

export const Button = styled.button<ButtonProps>`
    display: block;
    border-radius: 2px;
    color: var(--color-light, #fff);
    border: none;
    font-size: inherit;
    background: ${props => props.disabled ? "var(--color-disabled)" : "var(--color-theme)"};
    cursor: pointer;
    padding: .25rem .5rem;
    &:hover{
        background-color: var(--color-theme-hover);
    }
`;