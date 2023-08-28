import styled from 'styled-components';

type Props = {
    ratio?: string;
};

export const Photo = styled.img<Props>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    aspect-ratio: ${(props) => props.ratio};
`;
