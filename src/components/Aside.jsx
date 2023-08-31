import React, { useState, useEffect, useRef } from 'react';
import { img } from '../assets/img/imagenes';

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
            <div className={`Cabecera-nav ${open ? 'isActive' : 'isInactive'}` } >
                <ul>
                    <li><a href="#About"><img src={img.estrella} alt="like icon" /></a></li>
                    <li><a href="#Proyectos"><img src={img.cohete} alt="proyectos v" /></a></li>
                    <li><a href="#Skills"><img src={img.lupa} alt="skills icon" /></a></li>
                    <li><a href="https://github.com/maximilianobrs" target="_blank"><img src={img.github} alt="github icon" /></a></li>
                    <li><a href="https://www.linkedin.com/in/maximiliano-briones/" target="_blank"><img src={img.linkedin} alt="linkedin icon" /></a></li>
                </ul>
            </div>
        </aside>
    )
}