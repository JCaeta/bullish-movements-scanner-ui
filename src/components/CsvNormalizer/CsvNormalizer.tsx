import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { printError, printFileName, convertCsvToJson, convertJsonToCsv } from '../utils';
import CircularProgress from '@mui/material/CircularProgress'
import { postNormalizeCsv } from '../../pages/api/HttpRequests';

export const CsvNormalizer = () => {
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');
    const [multiFilesError, setMultiFilesError] = useState('');
    const [startError, setStartError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileUpload = (event: any) => {
        const files = event.target.files;
        if(files.length > 1) {
            setMultiFilesError("You cannot choose more than one file")
            setFileName("");
        } else {
            setFile(files[0]);
            setMultiFilesError("")
            setFileName(files[0].name);
        }
    };

    const onStartClick = async () => {
        if (!file) {
            setStartError('Please select a file before starting')
        } else {
            setStartError('')
            const fileJson = await convertCsvToJson(file);

            setLoading(true);
            const data = await postNormalizeCsv(fileJson);
            setLoading(false);
            
            const csvFile = await convertCsvToJson(data);
            console.log(csvFile);
        }
    };

    return (<>
        <Box textAlign="center">
            <h1>CSV Normalizer</h1>
            <h2>Upload your CSV data and normalize it for use with the candlestick analyzer</h2>
            <h3>
                Currently, this tool can only normalize data from Investing.com.
            </h3>
        </Box>
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center" >
            {/* First Row */}
            <Grid item>
                <Button 
                    variant="contained" 
                    component="label"
                    disabled={loading}>
                    Choose CSV
                    <input hidden accept="text/csv" multiple type="file" onChange={handleFileUpload} />
                </Button>
            </Grid>

            {/* Conditional rendering for selected file */}
            {fileName != ''? printFileName(fileName): null}
            {multiFilesError != ''? printError(multiFilesError): null}

            {/* Third Row */}
            <Grid item>
                <Button 
                    variant="contained" 
                    component="label" 
                    onClick={onStartClick}
                    disabled={loading}>
                    Normalize
                </Button>
            </Grid>

            <Grid item>
                {startError != ''? printError(startError): null}
                {loading? <CircularProgress />: null}
            </Grid>
        </Grid>
    </>);
}

CsvNormalizer.defaultProps =
{

}

CsvNormalizer.propTypes = 
{

}

