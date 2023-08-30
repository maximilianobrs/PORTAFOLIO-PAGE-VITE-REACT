import { MyProyectos } from "./Myproyectos"
import { Habilidades } from "./Myhabilidades"


import './Main.css'

export function Main() {
    return (
        <main>
            <div className="container">
                <MyProyectos />
                <Habilidades/>
            </div>
        </main>
    )
}