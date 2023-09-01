import './MyHabilidades.css'
import { img } from '../../assets/img/imagenes'

export function Habilidades() {
    return (
        <section id='Skills'>
            <div className='container'>
                <div className="box-content-skills">
                    <div className='box-text-skills'>
                        <h2>Mis Skills</h2>
                        <p>Mi experiencia abarca tecnologías como JavaScript, CSS, HTML, Bootstrap, SQL, ORM Sequelize, desarrollo de REST APIS, Gestión de versiones utilizando GIT y actualmente estoy ampliando mis conocimientos en el desarrollo web con React.js. para implementarlas a mis proyectos y continuar adquiriendo habilidades de desarrollo.</p>
                    </div>
                    <div className='box-content-icon'>
                        <div className='box-icon'>
                            <img src={img.javascript} alt="JavaScript icon"/>
                        </div>
                        <div className='box-icon'>
                            <img src={img.html} alt="HTML icon"/>
                        </div>
                        <div className='box-icon'>
                            <img src={img.css} alt="CSS icon"/>
                        </div>
                        <div className='box-icon'>
                            <img src={img.node} alt="Nodejs icon"/>
                        </div>
                        <div className='box-icon'>
                            <img src={img.express} alt="Expressjs icon"/>
                        </div>
                        <div className='box-icon'>
                            <img src={img.posgresql} alt="Posgresql icon"/>
                        </div>
                        <div className='box-icon'>
                            <img src={img.sequelize} alt="Sequelize icon"/>
                        </div>
                        <div className='box-icon'>
                            <img src={img.vitejs} alt="Vitejs icon"/>
                        </div>
                        <div className='box-icon'>
                            <img src={img.bootstrap} alt="Bootstrap icon"/>
                        </div>
                        <div className='box-icon'>
                            <img src={img.git} alt="Git icon"/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}