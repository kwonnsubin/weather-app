'use client'

import { useEffect } from "react"

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error.message)
    }, [])

    return (
        <>
            <h1>에러 페이지</h1>
            <button onClick={() => { reset() }}>새로고침</button>
        </>
    )
}