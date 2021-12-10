import React from 'react'
import { Link } from 'react-router-dom'
import './Output.css'

export default function Output({video, search}) {

    return (
        <div className="output_video">

            {
            video
            ?
                video.map((e, index)=>(
                        <div key = {e.id.videoId} className="output_div" >
                            <Link to={"/video/"+e.id.videoId+"/"+e.snippet.channelTitle}>
                                    <img src={e.snippet.thumbnails.medium.url} alt="surot"/>
                                    <p>{e.snippet.title.length<40?e.snippet.title:e.snippet.title.slice(0,40)+'...'}</p>
                                    <p>{e.snippet.channelTitle}</p>
                            </Link>
                        </div>
                ))
                :null
            }            
        </div>
    )
}
