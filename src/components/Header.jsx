import './Header.css'
import astronauta from '../assets/img/astronauta.png'

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
                        <img src={astronauta} alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
} 