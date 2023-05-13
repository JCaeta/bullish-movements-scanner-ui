import axios from "axios";
import * as https from 'https';

// const url = "http://localhost:5000"
// const url = "https://bullish-movement-scanner-server-production.up.railway.app"
const url = "https://bullish-movement-scanner-server.netlify.app";

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

export async function serverIsAvalible() {
    try {
        const response = await axios.get(url + '/api/available');
            return response.status === 200;
      } catch (error) {
            return false;
    }
}
