import './Header.css'

export function Header() {
    return (
        <header id='Home'>
            <div className="container" >
                <div className='box-content-header'>
                    <div className='box-about'>
                        <h1>MAXIMILIANO BRIONES</h1>
                        <h2>DESARROLLADOR FULL STACK</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate architecto impedit cum omnis, velit nulla laudantium eos tempora error optio incidunt ipsam, nostrum corrupti, natus fuga vitae explicabo placeat.</p>
                        <div>
                            <ul>
                                <li><a className='Icon-href' href="https://github.com/maximilianobrs" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" /></a></li>
                                <li><a className='Icon-href' href="https://www.linkedin.com/in/maximiliano-briones/" target="_blank"><img src="https://cdn.icon-icons.com/icons2/2997/PNG/512/linkedin_logo_icon_187625.png" alt="linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='box-header-img'>
                        <img src="https://cdn.pixabay.com/photo/2023/08/12/16/45/astronaut-8186058_1280.png" alt="astronauta" />
                    </div>
                </div>
            </div>
        </header>
    );
} 