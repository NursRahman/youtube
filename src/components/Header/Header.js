import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import sear from '../../images/search.svg'
import './Header.css'

export default function Header({search}) {
    const [poisk, setPoisk]= useState('')
    
    return (
        <header className="header" >

            <div className="header_logo">
                <Link to="/"> <img className="header_logo_img" src={logo} alt="YouTube" /> </Link>
            </div>
            <div className="header_content">
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    search(poisk)}
                    }>
                    <div className="header_search search">
                        <input className="search_input" type="text" value={poisk} onChange={(event)=>setPoisk(event.target.value)}/>
                        <button className="search_btn">
                            <img className="search_img" src={sear} alt="search" />
                        </button>
                    </div>
                </form>
            </div>
        </header>
    )
}
