import styled from 'styled-components'

export const ButtonStyles = styled.button`
        margin-top: 1rem;
        padding: 0 2rem;
        height: 3rem;
        background-color: var(--purple);
        color: var(--details);
        font-weight: 500;
        border: 0;
        border-radius: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: background-color .2s;

        img {
            margin-right: 0.5rem;
        }

        &:not(:disabled):hover {
            background-color: var(--hover-purple);
        }

        &:disabled {
            opacity: 0.6;
        }
`