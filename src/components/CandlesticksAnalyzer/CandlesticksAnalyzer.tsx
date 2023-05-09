import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
// import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { printError, printFileName, convertCsvToJson } from '../utils';
import CircularProgress from '@mui/material/CircularProgress'
import { postAnalysisRequest } from '../../pages/api/HttpRequests';
import { Chart } from '../Chart/Chart';
import { BarChart } from '../BarChart/BarChart';

export const CandlesticksAnalyzer = () => {
    // const [longPercentage, setLongPercentage] = useState('');
    const [maxCorrectionPercentage, setMaxCorrectionPercentage] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');
    const [multiFilesError, setMultiFilesError] = useState('');
    const [startError, setStartError] = useState('');
    const [loading, setLoading] = useState(false);
    const [chartData, setChartData] = useState(null);
    const [chartWidth, setChartWidth] = useState(0);
    const [normDistData, setNormDistData] = useState(null)

    useEffect(() => {
        const handleResize = () => {
            setChartWidth(window.innerWidth);
        };
    
        // Initial dimension setup
        handleResize();
    
        // Event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMaxCorrectionPecentage = (event: any) => {
        const inputNumber = event.target.value;
      
        // Allow only numbers and decimal point
        const filteredNumber = inputNumber.replace(/[^0-9.]/g, '');
      
        // Update the state with the filtered number
        setMaxCorrectionPercentage(filteredNumber);
    };

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

    const clear = () => {
        setChartData(null);
        setNormDistData(null);
    }

    const onStartClick = async () => {
        if (!file) {
            setStartError('Please select a file before starting')
        }
        else if (maxCorrectionPercentage == '')
        {
            setStartError('Please select a long and max correction percentages')
        } else {
            clear()
            setStartError('')
            const fileJson = await convertCsvToJson(file);

            setLoading(true);
            const data = await postAnalysisRequest(fileJson, maxCorrectionPercentage);
            setLoading(false);
            console.log("Candlesticks")
            console.log(data.candlesticksChart)
            setChartData(data.candlesticksChart);
            setNormDistData(data.normDistChart)
        }
    };

    return (<>
        <Box textAlign="center">
            <h1>Candlestick data analyzer</h1>
            <h2>Upload your CSV data and check the asset's movements</h2>
            <h3>
                This tool detects bullish price variations with corrections not exceeding the percentage you choose.
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

            {/* Second Row */}
            <Grid item container spacing={2} alignItems="center" justifyContent="center" >
                <Grid item>
                    <TextField
                    label="Enter max correction %"
                    value={maxCorrectionPercentage}
                    onChange={handleMaxCorrectionPecentage}
                    type="text"
                    inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                    }}
                    disabled={loading}/>
                </Grid>
            </Grid>

            {/* Third Row */}
            <Grid item>
                <Button 
                    variant="contained" 
                    component="label" 
                    onClick={onStartClick}
                    disabled={loading}>
                    Start
                </Button>
            </Grid>

            <Grid item>
                {startError != ''? printError(startError): null}
                {loading? <CircularProgress />: null}
            </Grid>
        </Grid>
        <Box>
            {chartData !== null?<Chart width={chartWidth} data={chartData}/>: null}
            {normDistData !== null?<BarChart data={normDistData.data} labels={normDistData.labels}/>:null}
        </Box>
    </>);
}

