'use client'

export default function RevalidateButton({ tag }) {
    const handleClick = async () => {
        const res = await fetch('/api/revalidate?tag=' + tag, { method: 'POST' }) // 쿼리로 태그를 넘겨주면됨.

        const result = await res.json();
        console.log(result);
    }

    return <button onClick={handleClick}>캐시 비우기</button>
}