import Logo from '../../assets/react.svg'
import '../../assets/styles/Heder.css'

function Header() {
    return ( 
        <header>
            <img src={Logo} alt="Logo :v" />
            <h1>José Fernando Durán Villatoro</h1>
        </header>
     );
}

export default Header;