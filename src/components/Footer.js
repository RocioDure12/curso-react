import "../styles/_footer.scss";
import Context from "../Context/Context";
import { useContext } from "react";


const Footer = () => {
    const context = useContext(Context)

    const handleClickTheme = () => {
        context.darkTheme.setDarkTheme(!context.darkTheme)
    }


    return (
        <footer className="footer">
            <p>Hecho con amor by mi</p>
            <button onClick={handleClickTheme}>
                Cambiar a modo {context.darkTheme ? "modo-claro" : "modo-oscuro"}
            </button>
        </footer>
    )
}
export default Footer;