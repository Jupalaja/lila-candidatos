import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-fetch';
import dotenv from 'dotenv';
import { format } from 'date-fns';
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
    caretaker: string;
    school: string;
    grade: string;
    courses: string[];
    days: string[];
    times: string[];
    phone: string;
    email: string;
    kind: string;
    topic: string;
    address: string;
  };

  if (req.method === 'POST') {
    const body = req.body as ReqBody;
    try {
      const client = await authenticate();
      const sheets = google.sheets({ version: 'v4', auth: client });

      const timestamp = format(new Date(), 'dd/MM/yyyy HH:mm:ss');

      const courses = body.courses.join(', ');

      const days = body.days.join(', ');
      const times = body.times.join(', ');

      const googleSheetData = [
        body.name,
        body.caretaker,
        body.school,
        body.grade,
        courses,
        days,
        times,
        body.kind,
        body.phone,
        body.email,
        body.address,
        body.topic,
        timestamp,
      ];
      const googleSheetRequest = {
        spreadsheetId: process.env.SHEET_ID,
        range: 'Hoja1!A1:M1',
        valueInputOption: 'RAW',
        resource: { values: [googleSheetData] },
      };
      const response = await sheets.spreadsheets.values.append(
        googleSheetRequest
      );

      const iftttData = {
        Nombre: body.name,
        Padre: body.caretaker,
        Colegio: body.school,
        Nivel: body.grade,
        Materias: body.courses,
        Dias: body.days,
        Horas: body.times,
        Tipo: body.kind,
        Telefono: body.phone,
        Correo: body.email,
        Direccion: body.address,
        Tema: body.topic,
        Registro: timestamp,
      };
      const iftttResponse = await fetch(
        'https://maker.ifttt.com/trigger/lila/json/with/key/b2Y4VhUq8WCp1CaaK-D91t',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(iftttData),
        }
      );

      if (response.status === 200 && iftttResponse.ok) {
        res.status(200).json({
          message:
            'Data processed and sent successfully to both Google Sheets and IFTTT.',
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
