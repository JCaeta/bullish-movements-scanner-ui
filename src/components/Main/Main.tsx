import React, {useState} from 'react';
import {Container} from '@mui/material';
import { CandlesticksAnalyzer } from '../CandlesticksAnalyzer/CandlesticksAnalyzer';
import { serverIsAvalible } from '@/pages/api/HttpRequests';
import { ClosedPage } from '../ClosedPage/ClosedPage';

export const Main = () => {
    const [serverAvailable, setServerAvailable] = useState(false);
    const checkServer = async () => {
        const available = await serverIsAvalible();
        setServerAvailable(available);
    }
    return (<>
        <Container maxWidth={false}>
            {serverAvailable?<CandlesticksAnalyzer/>:<ClosedPage/>}
            
        </Container>
    </>);
}

