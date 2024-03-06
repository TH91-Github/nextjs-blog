import Link from "next/link";

import weather from "./weather.module.css"
import { getCurrentWeather } from "./utils/getCurrentWeather";
import { getTime } from "./utils/getTime";
import RevalidateButton from "@/components/element/RevalidateButton";

export default async function Weather (){
  const directory = 'weather';
  const res = await getCurrentWeather('seoul')
  const time = await getTime(res.location.tz_id) 

  console.log(res.location.tz_id) // Asia/Seoul
  // console.log(res.current.condition.text)

  return (
    <div>
      <h1>Weather</h1>
      {time.dateTime}
      <ul className={weather.list}>
        <li>
          <Link href={`/${directory}/seoul`}>서울</Link>
          <span>{res.current.condition.text}</span>
        </li>
        <li><Link href={`/${directory}/newyork`}>뉴욕</Link></li>
        <li><Link href={`/${directory}/london`}>런던</Link></li>
      </ul>
      <RevalidateButton tag={'time'}/>
    </div>
  )
}