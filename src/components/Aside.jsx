import React, { useState, useEffect, useRef } from 'react';
import './Aside.css'

export function Aside() {
    const [open, setOpen] = useState(false);
    const asideRef = useRef(null);

    const toggleOpen = () => {
        setOpen(!open)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setOpen(false);
        }
    };

    const handleClickOutside = (event) => {
        if (asideRef.current && !asideRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <aside ref={asideRef}> 
            <button className='Cabecera-btn' onClick={toggleOpen}>
                <img src="https://cdn-icons-png.flaticon.com/512/57/57477.png" alt="Lupa icon" />
            </button>

            <nav className={`Cabecera-nav ${open ? 'isActive' : 'isInactive'}` } >
                <ul>
                    <li><a href="#Home" ><img src="https://cdn-icons-png.flaticon.com/256/25/25694.png" alt="home icon" /></a></li>
                    <li><a href="#About"><img src="https://cdn-icons-png.flaticon.com/512/686/686339.png" alt="like icon" /></a></li>
                    <li><a href="#Proyectos"><img src="https://cdn-icons-png.flaticon.com/512/28/28733.png" alt="proyectos v" /></a></li>
                    <li><a href="#Skills"><img src="https://cdn-icons-png.flaticon.com/512/1087/1087902.png" alt="skills icon" /></a></li>
                    <li><a href="https://github.com/maximilianobrs" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon" /></a></li>
                    <li><a href="https://www.linkedin.com/in/maximiliano-briones/" target="_blank"><img src="https://cdn.icon-icons.com/icons2/2997/PNG/512/linkedin_logo_icon_187625.png" alt="linkedin icon" /></a></li>
                </ul>
            </nav>
        </aside>
    )
}