import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import moment from 'moment-timezone';

dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let jwtClient: any;

async function authenticate() {
  if (!jwtClient) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const private_key = process.env.PRIVATE_KEY!.replace(/\\n/g, '\n');
    jwtClient = new google.auth.JWT(
      process.env.CLIENT_EMAIL,
      undefined,
      private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );
  }
  return jwtClient;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type ReqBody = {
    name: string;
    phone: string;
    school: string;
    email: string;
    topic: string;
  };

  if (req.method === 'POST') {
    const body = req.body as ReqBody;
    try {
      const client = await authenticate();
      const sheets = google.sheets({ version: 'v4', auth: client });

      const timestamp = moment()
        .tz('America/Bogota')
        .format('DD/MM/YYYY HH:mm:ss');

      const googleSheetData = [
        body.name,
        body.phone,
        body.school,
        body.email,
        body.topic,
        timestamp,
      ];
      const googleSheetRequest = {
        spreadsheetId: process.env.SHEET_ID,
        range: 'Hoja1!A1:F1',
        valueInputOption: 'RAW',
        resource: { values: [googleSheetData] },
      };
      const response = await sheets.spreadsheets.values.append(
        googleSheetRequest
      );

      if (response.status === 200) {
        res.status(200).json({
          message: 'Data processed and sent successfully to Google Sheets.',
        });
      } else {
        throw new Error(
          'An error occurred while processing and sending the data.'
        );
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'An error occurred while processing and sending the data.',
      });
    }
  } else {
    res
      .status(405)
      .json({ message: 'Method not allowed. Please send a POST request.' });
  }
}
