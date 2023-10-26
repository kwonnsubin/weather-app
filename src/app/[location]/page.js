import Link from "next/link"
import HomeButton from "../components/HomeButton"
import { getForecast } from "../utils/getForecast"

export function generateMetadata({ searchParams }) {
    return {
        title: `날씨 앱 - ${searchParams.name} `,
        description: `${searchParams.name} 날씨를 알려드립니다`,
    }
}

export default async function Detail({ params, searchParams }) {
    const name = searchParams.name
    const res = await getForecast(params.location);

    return (
        <>
            <h1>{name}의 3일 예보</h1>
            <ul>
                {res.forecast.forecastday.map(day => (
                    <li key={day.date}>{day.date} / {day.day.avgtemp_c}</li>
                ))}
            </ul>
            <HomeButton />
        </>
    )
}