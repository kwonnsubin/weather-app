const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const getForecast = async (location) => {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3&aqi=no&alerts=no`);

    if (!res.ok) {
        if (!res.ok) throw new Error('날씨 정보를 가져올 수 없습니다.');
    }

    return res.json();
}