import "../styles/_footer.scss";
import Context from "../Context/Context";
import { useContext } from "react";


const Footer = () => {

    const handleClickTheme = () =>{
        
    }

    const context = useContext(Context)

    return (
        <footer className="footer">
            <p>Hecho con amor by mi</p>
            <button onClick={handleClickTheme}>Cambiar a modo oscuro</button>
        </footer>
    )
}
export default Footer;