'use client'

type Props ={
  tag: string 
}

// api/revalidate/route 이 api를 여기서 호출을 해야한다.
// RevalidateButton 에서 fetch 동작을 수행해야하는데
export default function RevalidateButton ({ tag }: Props){ 
  const handleClick = async () => {
    const res = await fetch('/api/revalidate?tag=' + tag, {
      method: 'POST',
    })
    const result = await res.json()
    console.log(result)
  }  


  return <button onClick={handleClick}>캐시 비우기</button>
}