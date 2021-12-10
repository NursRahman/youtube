import React, { useState } from 'react'

export default function Home({search}) {
    const [poisk, setPoisk]=useState('')
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            search(poisk)}
            }>
            <input type="text" value={poisk} onChange={(event)=>setPoisk(event.target.value)}/>
            <button>Youtube</button>
        </form>
    )
}
