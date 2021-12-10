import React from 'react'
import {useParams} from 'react-router-dom'
import './Video.css'
export default function Video() {
    let params = useParams()
    
    // console.log(videos)

    return (
        <div className="detailed_video">
            <iframe title={"title"+params.id} src={'https://www.youtube.com/embed/'+params.id}></iframe>
            <h2>{params.name}</h2>
            {/* <img src={}/> */}
        </div>
    )
}
