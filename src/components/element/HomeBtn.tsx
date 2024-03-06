'use client'

import { useRouter } from "next/navigation"

export default function HomeBtn () {
  const router = useRouter()
  const handleClick = () => {
    console.log("뒤로 가기")
    router.push('/')
  }
  return (
    <button onClick={handleClick}>홈</button>
  )
}