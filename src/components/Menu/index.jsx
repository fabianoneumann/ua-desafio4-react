import { Link } from 'react-router-dom'

function Menu() {
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
        </>
    );
}

export default Menu;