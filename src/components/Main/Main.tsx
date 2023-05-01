import React from 'react';
import {Container} from '@mui/material';
import { CandlesticksAnalyzer } from '../CandlesticksAnalyzer/CandlesticksAnalyzer';

export const Main = () => {
    return (<>
        <Container maxWidth={false}>
            <CandlesticksAnalyzer/>
        </Container>
    </>);
}

