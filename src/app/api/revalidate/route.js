import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(req) {
    const tag = req.nextUrl.searchParams.get('tag')
    if (!tag) throw new Error('태그는 필수입니다.')

    revalidateTag(tag) // 이 tag가 달려있는 fetch 요청을 재검증한다.
    return NextResponse.json({ message: '재검증에 성공했습니다.', tag })
}