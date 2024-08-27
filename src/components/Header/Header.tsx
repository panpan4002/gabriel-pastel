import './Header.css'

import logo from '../../assets/logo.png'

function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo Gabriel Pastel"/>
                <h1>GABRIEL PASTEL</h1>
                <nav>
                    <a href="#">HOME</a>
                    <a href="#">NOSSO IMPACTO</a>
                    <a href="#">NOSSA HISTÓRIA</a>
                    <button>PEÇA JÁ!</button>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2m8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2m.396-5a2 2 0 0 0 1.952-1.566L21 5H7V4a2 2 0 0 0-2-2H3v2h2v11a2 2 0 0 0 2 2h12a2 2 0 0 0-2-2H7v-2z" />
                    </svg> */}
                </nav>
            </header>
        </>
    )
}

export default Header;