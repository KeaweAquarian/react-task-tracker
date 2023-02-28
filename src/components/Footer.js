import { useLocation, Link } from "react-router-dom"

const Footer = () => {
    return (
       <footer>
        
<Link to="/agileValues" className="linkStyle">Agile Values</Link>
<Link to="/agile12" className="linkStyle">Agile Principles</Link>
<Link to="/about" className="linkStyle">About</Link>
        <h5>Copytight &copy; 2023</h5>
       </footer>
    )
    }

export default Footer
