import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

const sectionAnimation = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

export const Section = styled(motion.section)`
    padding: 92px 0;
    @media ${theme.media.tablet} {
        padding: 40px 0;
    }
`;

type Props = {
    id: string;
    children: ReactNode;
};

export const StyledSection: FC<Props> = ({ id, children }) => {
    return (
        <Section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={sectionAnimation}
        >
            {children}
        </Section>
    );
};
