import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// req: request 값은 NextRequest 라는 타입을 가진다.
export async function POST(req: NextRequest) {
  // const 태그를 결국에는 호출 부에서 지정.
  const tag = req.nextUrl.searchParams.get('tag')
  if(!tag) throw new Error('태그는 필수입니다.')

  revalidateTag(tag) // 여기에 tag를 넣으면 tag가 달려있는 fetch 요청을 재검증해준다.
  // 이후 성공했다면 
  return NextResponse.json({ message:'재검증에 성공했습니다.', tag })
}