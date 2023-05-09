import axios from "axios";
import * as https from 'https';

const url = "http://localhost:5000"

export async function postAnalysisRequest(file: any, maxCorrectionPercentage: string){
    const req = {file: file, maxCorrectionPercentage: maxCorrectionPercentage}
    const response = await axios.post(url + '/api/analysis', req, {
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
    });
    return response.data;
}

export async function postNormalizeCsv(file: any){
    const response = await axios.post(url + '/api/normalize', file, {
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
    });
    return response.data;
}