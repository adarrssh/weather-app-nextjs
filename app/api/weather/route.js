// pages/api/weather.js
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    const url = new URL(req.url);

    const params = new URLSearchParams(url.search);

    const localityId = params.get('localityId');

    if (!localityId) {
        return NextResponse.json({ error: 'localityId is required' }, { status: 400 });
    }

    const headers = {
        "X-Zomato-Api-Key": `${process.env.API_KEY}`,
    };



    try {
        const url = `${process.env.API_URL}=${localityId}`;
        const resposne = await axios(url, { headers });
        const data = resposne?.data?.locality_weather_data;
        console.log(resposne?.data?.locality_weather_data);
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error(error);
       return NextResponse.json({ error }, { status: 500 })
    }
}
