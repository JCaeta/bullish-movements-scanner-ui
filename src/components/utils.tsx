import Grid from '@mui/material/Grid'
import Papa from "papaparse";

export const printFileName = (fileName: string) => {
    return(<>
        <Grid item textAlign="center">
            <p>Selected file</p>
            <p>{fileName}</p>
        </Grid>
    </>)
}

export const printError= (message: string) => {
    return(<>
        <Grid item textAlign="center">
            <p style={{color: "red"}}>{message}</p>
        </Grid>
    </>)
}

export async function convertCsvToJson(file: any) {
    try {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                complete: function (results, file) {
                    resolve(results.data);
                },
                error: function (error, file) {
                    reject(error);
                },
            });
        });
    } catch (error) {
        console.error('Error converting CSV to JSON:', error);
        return null;
    }
}

export async function convertJsonToCsv(jsonData: any[]) {
    try {
      return new Promise((resolve, reject) => {
        const csvData = Papa.unparse(jsonData);
        resolve(csvData);
      });
    } catch (error) {
      console.error('Error converting JSON to CSV:', error);
      return null;
    }
}

