import HomeBtn from "@/components/element/HomeBtn"
import { getForecast } from "../utils/getForecast"

type Props ={
  params:{
    location: string
  }
} 
export default async function Detail ({params}: Props) {
  const name = params.location 
  const res = await getForecast(name === 'newyork' ? 'New York': name)
  return (
    <>
      <h1>Detail zz {params.location} 의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
        ))}

      </ul>
      <HomeBtn />
    </>
  )
}