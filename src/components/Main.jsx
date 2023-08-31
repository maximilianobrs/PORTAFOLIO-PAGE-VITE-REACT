import { MyProyectos } from "./Myproyectos"
import { Habilidades } from "./Myhabilidades"
import { AboutMe } from "./About"

import './Main.css'

export function Main() {
    return (
        <main>
                <AboutMe/>
                <MyProyectos />
                <Habilidades/>
        </main>
    )
}