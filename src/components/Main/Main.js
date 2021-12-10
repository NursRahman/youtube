import React, { useEffect, useState } from 'react'
import { API } from '../config/config'
import Output from '../Output/Output'
import Header from '../Header/Header'
import './Main.css'
import { Routes, Route } from 'react-router'
import Video from '../Video/Video'

export default function Main() {
    
    const [video, setVideo] = useState([])


    const search = async (poisk) => {
        const req = await fetch(poisk ===null ? API :API+poisk)
        const res = await req.json()
        setVideo(res.items)
        // console.log(res.items)
    }

    useEffect(()=>{
        search()
    },[])

    return (
        <div className="wrapper">
            <Header search={search}/>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Output video={video}/>}/>
                    <Route exact path="/video/:id/:name" element={<Video search={search} video={video}/>}/>
                </Routes>
            </div>
            {/* <Home search={search}/>
            <Output video={video}/> */}
        </div>
    )
}
