import { Aside } from './Aside'
import './Nav.css'

export function MyNav() {
    return (
        <nav>
            <div className="container">
                <div className="box-content-nav">
                    <div>
                        <h2>MX</h2>
                    </div>
                    <dir>
                        <ul>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Proyectos">Proyectos</a></li>
                            <li><a href="#Skills">Skills</a></li>
                            <li><a href="#Contacto">Contacto</a></li>
                        </ul>
                    </dir>
                    <Aside />
                </div>
            </div>
        </nav>
    )
}