import styled from 'styled-components';

type Props = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
    margin?: string;
    flex?: string;
};

export const FlexWrapper = styled.div<Props>`
    display: flex;
    gap: ${(props) => props.gap || 'unset'};
    flex-direction: ${(props) => props.direction || 'row'};
    align-items: ${(props) => props.align || 'stretch'};
    justify-content: ${(props) => props.justify || 'flex-start'};
    flex-wrap: ${(props) => props.wrap || 'no-wrap'};
    margin: ${(props) => props.margin || '0'};
    flex: ${(props) => props.flex};
`;
