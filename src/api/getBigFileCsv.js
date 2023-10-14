import axios from 'axios';
import Papa from 'papaparse';

export default async function getBigFileCsv() {
   try{
     const response = await axios.get('https://support.staffbase.com/hc/en-us/article_attachments/360009197011/username-password-recovery-code.csv');
    const csvData = response.data;
    const parsedData = Papa.parse(csvData, { header: true });
    return parsedData.data;
   } catch(error)  {
    // Handle the error
    console.error(error);
   }
}
