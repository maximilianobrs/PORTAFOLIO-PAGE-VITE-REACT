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
                        <img src="../assets/img/setup.png" alt="astronauta" />
                    </div>
                </div>
            </div>
        </header>
    );
} 