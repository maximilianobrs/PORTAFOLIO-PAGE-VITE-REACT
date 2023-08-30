import React, { useState, useEffect, useRef } from 'react';
import './Aside.css'

export function Aside() {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open)
    }

    return (
        <aside>
            <button className='Cabecera-btn'
                onClick={toggleOpen}>
                <img src="https://static.vecteezy.com/system/resources/previews/011/459/588/non_2x/black-search-engine-or-magnifying-glass-icon-free-png.png" alt="" />
            </button>

            <nav className={`Cabecera-nav ${open ? 'isActive' : ''}`}>
                <ul>
                    <li><a href="#Home" ><img src="https://cdn-icons-png.flaticon.com/256/25/25694.png" alt="home" /></a></li>
                    <li><a href="#Proyectos"><img src="https://cdn-icons-png.flaticon.com/512/28/28733.png" alt="proyectos" /></a></li>
                    <li><a href="#Skills"><img src="https://cdn-icons-png.flaticon.com/512/1087/1087902.png" alt="skills" /></a></li>
                    <li><a href="https://github.com/maximilianobrs" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" /></a></li>
                    <li><a href="https://www.linkedin.com/in/maximiliano-briones/" target="_blank"><img src="https://cdn.icon-icons.com/icons2/2997/PNG/512/linkedin_logo_icon_187625.png" alt="linkedin" /></a></li>
                </ul>
            </nav>
        </aside>
    )
}