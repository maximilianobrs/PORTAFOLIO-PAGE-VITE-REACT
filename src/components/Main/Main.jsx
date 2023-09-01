import { MyProyectos } from "../../page/MyProyectos/MyProyectos"
import { Habilidades } from "../../page/MyHabilidades/MyHabilidades"
import { AboutMe } from "../../page/AboutMe/About"

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