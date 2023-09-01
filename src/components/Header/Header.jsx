import { img } from '../../assets/img/imagenes'

import './Header.css'

export function Header() {

    return (
        <header id='Home'>
            <div className="container" >
                <div className='box-content-header'>
                    <div className='box-tittle-header'>
                        <h1>MAXIMILIANO BRIONES</h1>
                        <h2>DESARROLLADOR FULL STACK</h2>
                    </div>
                    <div className='box-header-img'>
                        <img className='astro-animate' src={img.astro2} alt="astronauta" loading="lazy"/>
                    </div>
                </div>
            </div>
        </header>
    );
} 